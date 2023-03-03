import React from 'react'
import styledComponent from 'styled-components';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const BasketButton = ({count  , ...restProps}) => {
  return (
    <StyledBtn {...restProps}>
        <ShoppingCartIcon/>
            <StyledTitle>Your Cart</StyledTitle>
            <StyledConter id='counter'>{count}</StyledConter>
    </StyledBtn>
  )
}

export default BasketButton;

const StyledBtn = styled(Button)(({theme })=> ({
  background: theme.palette.primary.main,
  color: "#fff",
  borderRadius: "1.70rem",
  padding: " 0.75rem 2rem",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  border: "none",
  height:"10vh",
  cursor: "pointer",
  display: "flex",
  alignItems:"center",

  "&:hover": {
    backgroundColor:theme.palette.primary.main,
  },

  "&:hover > #counter": {
    background: theme.palette.primary.dark,
  },

  "&.bump": {
    animation: "bump 300ms ease-out",
  },

  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "10% ": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
})) 

const StyledTitle = styledComponent.span`
    margin: 0 1.5rem 0 0.75rem;
 
`;
const StyledConter = styled('span')(({ theme})=>({
  color: "white",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "27px",
  background: theme.palette.primary.main,
  borderRadius: "30px",
  padding:"4px 20px",
}))
    

