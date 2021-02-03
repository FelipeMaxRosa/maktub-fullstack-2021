import React, { useState } from 'react';
import {
  Button, Input, InputLabel,
} from '@material-ui/core';
import {
  StyledCard, StyledSectionTitle, StyledForm,
  StyledFormControl, StyledHeader, StyledTextField, StyledDivCardButtons
} from "../components/styled";


export default function CardCharacter({onSubmit}) {
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isValidate, setIsValidate] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidate) {
      const newCharacter = {
        nome: name,
        descricao_curta: shortDescription,
        descricao_completa: fullDescription,
        url_imagem: imageUrl
      }

      onSubmit(newCharacter);
      clearStates();
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target["name"];
    
    switch (name) {
      case "name":
        setName(value);
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
    setName('');
    shortDescription('');
    fullDescription('');
    setImageUrl('');
    setIsValidate(false);
  }

  return (
    <StyledCard>
      <StyledForm>
        <StyledHeader>
          <StyledSectionTitle>Novo Personagem</StyledSectionTitle>
        </StyledHeader>

        <StyledFormControl fullWidth>
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input value={name} onChange={handleChange} id="name" name="name" required/>
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
    {/*  */}
      <StyledDivCardButtons>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Cadastrar
        </Button>
      </StyledDivCardButtons>
    </StyledCard>
  );
}
