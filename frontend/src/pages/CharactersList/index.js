import React, { useEffect, useState } from 'react';
import * as characterService from "../../services/characterService";
import CardCharacter from "../../components/CardCharacter";

export default function OtherPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await characterService.getAll();
      console.log(result.data);

      setCharacters(result.data);
    }

    fetchCharacters();
  }, [])

  return (
    <div className="page-content">
      {characters.map((character) => {
        return (
          <CardCharacter key={character.id} value={character} />
        )
      })}
    </div>
  )
}
