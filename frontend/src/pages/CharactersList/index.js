import React, { useEffect, useState } from 'react';
import * as characterService from "../../services/characterService";
import CardCharacter from "../../components/CardCharacter";
import Pagination from '@material-ui/lab/Pagination';
import { StyledGroupCards, StyledFooterPagination, StyledGrid } from '../../components/styled';


export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);


  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await characterService.getAll();

      // Ordena por nome de forma ascendente
      const sortedResult = result.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
      setCharacters(sortedResult);
    }

    fetchCharacters();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <div className="page-content">
      <StyledGroupCards container justify="center" spacing={2}>
        {currentCards.map((character) => {
          return (
            <StyledGrid key={character.id} item xs={12} sm={4} >
              <CardCharacter key={character.id} value={character}/>
            </StyledGrid>
          )
        })}
      </StyledGroupCards>

      <StyledFooterPagination>
        <Pagination count={Math.ceil(characters.length / cardsPerPage)}
          color="primary" page={currentPage} onChange={handleChange} shape="rounded"/>
      </StyledFooterPagination>
    </div>
  )
}
