import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardMedia, Avatar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { StyledDivCardButtons, StyledCard, StyledButtonLink } from "./styled";


// Estilização padrão do componente do Material Ui
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardCharacter({ value, openModal }) {
  const { id, nome, descricao_curta, url_imagem: url } = value;
  const firstLetter = nome.split('');
  const classes = useStyles();

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstLetter[0]}
          </Avatar>
        }
        title={nome}
        subheader={descricao_curta}
      />

      <CardMedia
        className={classes.media}
        image={url}
        title="Paella dish"
      />

      <StyledDivCardButtons>
        <StyledButtonLink primary="true" variant="contained" color="primary" to={`characters/${id}`} >
          Detalhes
        </StyledButtonLink>
      </StyledDivCardButtons>
    </StyledCard>
  );
}
