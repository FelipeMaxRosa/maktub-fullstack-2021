import React, { useEffect, useState } from 'react'
import {
  StyledButtonLink, StyledGrid, StyledPaperDetails, StyledGroupDetails,
  StyledImgDetails, StyledTitleDetails, StyledSubtitleDetails, StyledGridDetails,
  StyledRow
} from '../../components/styled';
import * as characterService from "../../services/characterService";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CharacterDetails(props) {
  const { id } = props.match.params;
  const [character, setCharacter] = useState({});
  
  const classes = useStyles();

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await characterService.get(id);

      setCharacter(result.data);
      console.log(result.data);
    }

    fetchCharacters();
  }, [id]);

  return (
    <div className="page-content">
        <StyledGroupDetails container justify="center">
          <header>
            <StyledTitleDetails>{character.nome}</StyledTitleDetails>
            <StyledSubtitleDetails>{character.descricao_curta}</StyledSubtitleDetails>
          </header>
          <StyledGrid key={character.id} item xs={12} sm={6} >
            <div>              
              <StyledGridDetails>
                <StyledImgDetails src={character.url_imagem}></StyledImgDetails>
              </StyledGridDetails>
            </div>
          </StyledGrid>

          <StyledGridDetails xs={12} sm={6}>
            <StyledPaperDetails>{character.descricao_completa}</StyledPaperDetails>
          </StyledGridDetails>
        </StyledGroupDetails>
      
        {/* <StyledButtonLink variant="contained" color="primary" to="/characters">Voltar</StyledButtonLink> */}

    </div>
  )
}
