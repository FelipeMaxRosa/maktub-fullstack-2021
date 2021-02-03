import React from 'react';
import CardNewCharacter from "../../components/CardNewComponent";
import * as characterService from "../../services/characterService";


export default function Home() {
  const persistData = async (newCharacter) => {
    console.log(newCharacter);
    try {
      const result = await characterService.create(newCharacter);
      console.log(result.data);
      alert("Personagem cadastrado com sucesso!");

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="page-content">
      <CardNewCharacter onSubmit={persistData}/>
    </div>
  )
}
