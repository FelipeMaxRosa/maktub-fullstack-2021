import React, { useState } from 'react';
import {
  Button, Input, InputLabel,
} from '@material-ui/core';
import {
  StyledCard, StyledSectionTitle, StyledForm, StyledFormCard,
  StyledFormControl, StyledHeader, StyledTextField, StyledDivCardButtons
} from "./styled";
import { Link } from 'react-router-dom';


export default function CardNewCharacter({onSubmit}) {
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
        url_imagem: encodeURI(imageUrl)
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

      <StyledDivCardButtons style={{paddingRight: 0}}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Salvar
        </Button>
      </StyledDivCardButtons>
    </StyledFormCard>
  );
}
