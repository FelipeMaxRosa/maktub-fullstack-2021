import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { StyledLink, StyledMenuLink, StyledDivMenuSM } from "../components/styled";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    }
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  // console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Maktub - Personagens
          </Typography>
          <div>
            {isMobile ?
              (
              <>
                <IconButton
                  edge="start"
                  onClick={handleMenu}
                  aria-haspopup="true"
                  aria-controls="menu-appbar"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu">
                  <MenuIcon />
                </IconButton>
                
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <StyledLink to="/character">
                      Cadastrar
                    </StyledLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <StyledLink to="/characters">
                      Listar
                    </StyledLink>
                  </MenuItem>
                </Menu>
              </>
              ) : (
                <StyledDivMenuSM>
                  <StyledMenuLink to="/character">
                    Cadastrar
                  </StyledMenuLink>
                  <StyledMenuLink to="/characters">
                    Listar
                  </StyledMenuLink>
                </StyledDivMenuSM>
               )
          }
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;