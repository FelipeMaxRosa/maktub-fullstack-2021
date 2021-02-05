import styled from "styled-components";
import { Card, TextField, FormControl, Grid, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const StyledNavLink = styled(Link)`
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
  min-width: 250px; 
  max-width: 345px;
  height: 334px;
  background-color: #fafafa;
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
  margin: 0 ;
  width: 100%;
  padding: 0;
  display: flex;
  flex-grow: 1;
`;

export const StyledGroupDetails = styled(Grid)`
  margin: 0 ;
  width: 100%;
  padding: 0;
  /* display: flex; */
  /* flex-direction: column */
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

export const StyledHeaderDetails = styled.header`
  /* margin-bottom: 16px; */
`;

export const StyledGrid = styled(Grid)`
  margin: 12px 0;
  padding: 0;
`;

export const StyledGridDetails = styled(Grid)`
  margin: 0;
  padding: 0;
`;

export const StyledButtonLink = styled(Link)`
  background: ${props => props.primary ? "#3f51b5" : "rgb(220, 0, 78)"};
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-block;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: ${props => props.primary ? "rgb(17, 82, 147)" : "rgb(154, 0, 54)"};
    box-shadow: 2px 2px 5px darkgray;
  }
`;

export const StyledButtonBigLink = styled(Link)`
  background: ${props => props.primary ? "#3f51b5" : "rgb(220, 0, 78)"};
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  font-size: 0.875rem;
  width: 350px;
  height: 60px;
  box-sizing: border-box;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  margin: 12px 0;
  display: flex;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  transition: 200ms;
  &:hover {
    background: ${props => props.primary ? "rgb(17, 82, 147)" : "rgb(154, 0, 54)"};
    box-shadow: 2px 2px 5px black;
    font-size: 20px;
  }
`;

export const StyledImgDetails = styled.img`
  width: 100%;
  border-radius: 7px;
`;

export const StyledTitleDetails = styled.h3`
  margin-bottom: 8px;
`;

export const StyledSubtitleDetails = styled.span`
  display: block;
  color: #b1b1b1;
`;

export const StyledPaperDetails = styled(Paper)`
  margin-top: 16px;
  padding: 16px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;