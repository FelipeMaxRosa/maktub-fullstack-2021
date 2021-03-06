import React, { useEffect, useState } from 'react'
import {
  StyledButtonLink, StyledGrid, StyledPaperDetails, StyledGroupDetails,
  StyledImgDetails, StyledTitleDetails, StyledSubtitleDetails, StyledGridDetails,
  StyledHeader, StyledButtonBigLink } from '../../components/styled';
import * as characterService from "../../services/characterService";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";


export default function CharacterDetails(props) {
  const { id } = props.match.params;
  const [character, setCharacter] = useState({});
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await characterService.get(id);

      setCharacter(result.data);
    }

    fetchCharacters();
  }, [id]);

  const GroupButtonsXS = () => {
    return (
      <StyledGrid item xs={12} sm={6} container justify="flex-end">
        <StyledButtonLink
          variant="contained" primary="true"
          style={{marginRight: "12px"}} to="/character">Novo Personagem</StyledButtonLink>
        <StyledButtonLink
          variant="contained"
          to="/characters">Voltar</StyledButtonLink>
      </StyledGrid>
    )
  }
  
  const GroupButtonsSM = () => {
    return (
      <StyledGrid item xs={12} sm={6} container
        direction="column" justify="center" alignItems="center">
        <StyledButtonBigLink primary="true" to="/character">
          Novo Personagem
        </StyledButtonBigLink>
        <StyledButtonBigLink to="/characters">
          Voltar
        </StyledButtonBigLink>
      </StyledGrid>
    )
  }

  return (
    <div className="page-content">
      <div>
        <StyledGroupDetails container >
          <StyledGrid item xs={12} sm={6}>
            <StyledGrid key={character.id} item>
              <StyledHeader>
                <StyledTitleDetails>{character.nome}</StyledTitleDetails>
                <StyledSubtitleDetails>{character.descricao_curta}</StyledSubtitleDetails>
              </StyledHeader>
              <div>              
                <StyledGridDetails>
                  <StyledImgDetails src={character.url_imagem}></StyledImgDetails>
                </StyledGridDetails>
              </div>
            </StyledGrid>
            
            <StyledGridDetails>
              <StyledPaperDetails elevation={3}>{character.descricao_completa}</StyledPaperDetails>
            </StyledGridDetails>
          </StyledGrid>

          {matches ? <GroupButtonsSM /> : <GroupButtonsXS />}
        </StyledGroupDetails>
      </div>
    </div>
  )
}
