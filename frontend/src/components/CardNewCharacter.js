import React, { useEffect, useState } from 'react';
import {
  Button, Input, InputLabel,
} from '@material-ui/core';
import {
  StyledSectionTitle, StyledForm, StyledFormCard,
  StyledFormControl, StyledHeader, StyledTextField, StyledDivCardButtons
} from "./styled";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CardNewCharacter({onSubmit}) {
  const [nameCharacter, setNameCharacter] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isValidate, setIsValidate] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (nameCharacter.length > 0 && shortDescription.length > 0 && fullDescription.length > 0 && imageUrl.length > 0) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  }, [nameCharacter, shortDescription, fullDescription, imageUrl]);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidate) {
      const newCharacter = {
        nome: nameCharacter,
        descricao_curta: shortDescription,
        descricao_completa: fullDescription,
        url_imagem: encodeURI(imageUrl)
      }

      onSubmit(newCharacter);
      setOpen(true);
      setIsValidate(false);
      clearStates();
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target["name"];
        
    switch (name) {
      case "nameCharacter":
        setNameCharacter(value);
        break;
      case "shortDescription":
        setShortDescription(value);
        break;
      case "fullDescription":
        setFullDescription(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;      
      default: return;
    }
  }

  const clearStates = () => {
    setNameCharacter('');
    setShortDescription('');
    setFullDescription('');
    setImageUrl('');
  }

  return (
    <StyledFormCard>
      <StyledForm>
        <StyledHeader>
          <StyledSectionTitle>Novo Personagem</StyledSectionTitle>
        </StyledHeader>

        <StyledFormControl fullWidth>
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input value={nameCharacter} onChange={handleChange} id="name" name="nameCharacter" required/>
        </StyledFormControl>
        
        <StyledFormControl fullWidth>
          <InputLabel htmlFor="shortDescription">Descrição curta</InputLabel>
          <Input value={shortDescription} id="shortDescription" onChange={handleChange} name="shortDescription" required/>
        </StyledFormControl>

        <StyledTextField
          fullWidth
          value={fullDescription}
          onChange={handleChange}
          rows={4}
          id="outlined-textarea"
          label="Descrição completa"
          name="fullDescription"
          multiline
          variant="outlined"
          />
        
        <StyledFormControl fullWidth>
          <InputLabel htmlFor="imageUrl">URL da imagem</InputLabel>
          <Input value={imageUrl} id="imageUrl" onChange={handleChange} name="imageUrl" required/>
        </StyledFormControl>   
      </StyledForm>

      <StyledDivCardButtons style={{paddingRight: 0}}>
        <Button onClick={handleSubmit} variant="contained" color="primary" disabled={!isValidate}>
          Salvar
        </Button>
      </StyledDivCardButtons>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </StyledFormCard>
  );
}
