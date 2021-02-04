import styled from "styled-components";

import { Card, TextField, FormControl, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: #fff !important;
  margin-right: 36px;
`;

export const StyledDivMenuSM = styled.div`
  margin-left: 100px;
`;

export const StyledSectionTitle = styled.h3`
  font-family: 'Roboto';
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledFormControl = styled(FormControl)`
  margin-bottom: 16px !important;
`;

export const StyledCard = styled(Card)`
  /* padding: 16px; */
  min-width: 250px; 
  max-width: 345px;
  height: 334px;
`;

export const StyledFormCard = styled(Card)`
  padding: 16px;
  min-width: 250px; 
  max-width: 345px;
`;

export const StyledHeader = styled.header`
  margin-bottom: 16px;
`;

export const StyledTextField = styled(TextField)`
  margin: 24px 0;
`;

export const StyledDivCardButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 16px;
  padding: 0 16px;
`;

export const StyledGroupCards = styled(Grid)`
  /* margin: 16px 0 ; */
  width: 100%;
  padding: 0;
  display: flex;
  flex-grow: 1;
`;

export const StyledDivGroupCards = styled.div`
  /* margin: 16px 0 ; */
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFooterPagination = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

export const StyledGrid = styled(Grid)`
  margin: 12px 0;
  padding: 0;
`;