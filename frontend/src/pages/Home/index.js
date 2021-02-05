import { Typography } from '@material-ui/core';
import React from 'react';
import { StyledGrid } from "../../components/styled";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';

function HomePage() {
  return (
    <div className="page-content">
      <StyledGrid container direction="column" justify="center" alignItems="center" style={{ textAlign: "center" }}>
        <StyledGrid item xs={12}>
          <StyledGrid>
            <Typography variant="h4" gutterBottom>
              Olá, Maktub
            </Typography>
            <Typography variant="h6" gutterBottom>
              Seja muito bem-vindo(a) à sua Aplicação Pessoal de Personages Favoritos.
            </Typography>
      
            <Typography variant="subtitle1" gutterBottom>
              Onde todos os seus personagens <FavoriteIcon style={{ verticalAlign: "top", color:"rgb(220, 0, 78)" }}/> estarão a apenas um click de distância.
            </Typography>

            <Typography variant="body1" gutterBottom>
                Seja um personagem de filme, de série, de novela, até mesmo
                daquele anime que você <ThumbUpOutlinedIcon style={{ verticalAlign: "top" }} /> <br />
                Aqui você pode ter todos eles!<br />
                E aí? O que você está esperando para começar a montar a sua lista de personagens favoritos?
            </Typography>
          </StyledGrid>
        </StyledGrid>

        {/* <StyledGrid item xs={12} sm={6}>
          <StyledGrid>Direita</StyledGrid>
        </StyledGrid> */}
      </StyledGrid>
    </div>
  )
}

export default HomePage;
