import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardHeader, CardMedia, Button,
  CardContent, Avatar, Typography, CardActions
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

import { StyledDivCardButtons } from "./styled";


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

export default function CardCharacter({ value }) {
  const { id, nome, descricao_curta, descricao_completa, url_imagem: url } = value;
  const firstLetter = nome.split('');
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {descricao_completa}
        </Typography>
      </CardContent>

      <CardActions>
        <StyledDivCardButtons>
          <Button variant="contained" color="primary">
            Detalhes
          </Button>
        </StyledDivCardButtons>
      </CardActions>
    </Card>
  );
}
