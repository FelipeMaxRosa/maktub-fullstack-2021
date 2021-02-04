import React, { useEffect, useState } from 'react';
import * as characterService from "../../services/characterService";
import CardCharacter from "../../components/CardCharacter";
import Pagination from '@material-ui/lab/Pagination';
import { StyledGroupCards, StyledFooterPagination, StyledGrid } from '../../components/styled';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogSubtitle = withStyles(styles)((props) => {
  const { children, classes } = props;
  return (
    <MuiDialogTitle disableTypography >
      <Typography variant="span">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function OtherPage() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (value) => {
    setSelectedCharacter(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await characterService.getAll();

      setCharacters(result.data);
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
              <CardCharacter key={character.id} value={character} openModal={handleClickOpen} />
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
