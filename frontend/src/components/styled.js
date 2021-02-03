import styled from "styled-components";

import { Card, TextField, FilledInput, FormControl, TableRow, TableCell, Grid } from '@material-ui/core';
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
  padding: 16px;
  min-width: 275px;
  max-width: 400px;
`;

export const StyledHeader = styled.header`
  margin-bottom: 16px;
`;

export const StyledTextField = styled(TextField)`
  margin: 24px 0;
`;

export const StyledDivCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 16px;
`;


