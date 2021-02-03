import React from 'react';
import CardCharacter from "../../components/CardComponent";
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
      <CardCharacter onSubmit={persistData}/>
    </div>
  )
}
