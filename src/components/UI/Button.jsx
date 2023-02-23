import React from 'react'
// import styled from 'styled-components'
import { Button as MuiButtons} from '@mui/material';
import {styled} from "@mui/system";


const Button = ({children, variant="contained",text,   borderStyle="rounder", ...restProps}) => {
  return (
    <StyledButton variant={variant}  borderStyle={borderStyle}  {...restProps}>{children}</StyledButton>
  )
}

export default Button;


const getBackdropColor = (variant)=>{
  return variant === "contained"?"#8a2b06":"#FFF"
}

const getBorder = (variant)=>{
  return variant === "contained"?"none":"1px solid #8A2B06"
}
const getColor = (variant)=>{
  return variant === "contained"?"#FFF":"#8A2B06"
}

const getBorderRadius = (borderStyle)=>{
  return borderStyle === "rounder"?"20px":"6px"
}

const getPadding = (borderStyle) => {
  return borderStyle === "rounded" ? "10px 32px" : "8px 14px";
};

const StyledButton = styled(MuiButtons) ((variant, borderStyle)=>({
  display:"flex",
  alignItems:"center",
  gap: "0.3125rem",
  background:getBackdropColor(variant),
  color: getColor(variant),
  borderRadius: getBorderRadius(borderStyle),
  padding: getPadding(borderStyle),
  fontWeight: "600",
  lineHeight: "1.5rem",
  border: getBorder(variant),
  cursor: "pointer",
  
  "&:hover": {
    background: "#7e2a0a",
    color: "#fff",

    "&:path": {
      stroke: "#fff",
    },
  },
}));
  
