import React, { useState } from 'react'
import styled from '@emotion/styled';
import {ReactComponent as PlusIcons} from "../../../assets/icons/plus-icons.svg"
import Button from '../../UI/Button'
import {addToBasket} from "../../../store/basket/basketSlice"
import { useDispatch } from 'react-redux'
import {TextField} from "@mui/material"
import AddIcon from "@mui/icons-material/Add";

const MealItemForm = ({id, title, price }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1)
   
  const amountChangeHandler = (event)=>{
     setAmount(event.target.value)
  }

  const submitHandler = (event)=>{
    event.preventDefault()
  
    const basketItem = {
      id,
      price,
      title,
      amount,
    }
  dispatch(addToBasket(basketItem))
    }
  return (
    <StyledForm onClick={submitHandler}>
       <Container>
       <StyledLabel htmlFor={id}>Amount</StyledLabel>
       </Container>
       <Container>
       <StyledText
          id={id}
          type="number"
          InputLabelProps={{
            shrink:true,
          }}
          size="small"
          onChange={amountChangeHandler}
          value={amount}
          inputProps={{min:1,max:5 }}  
        />
       </Container>
            <Button>
            <AddIcon/>Add
            </Button>

    </StyledForm>
  )
}

export default MealItemForm;

const StyledText = styled(TextField)(()=>({
  width: " 3.75rem",
  height: "2rem",
  outline: "none",
  borderRadius: "6px",
  fontWeight: "500",
  fontSize: "16px",
}));

const StyledForm = styled("form")(() => ({
  display: " flex",
  flexDirection: " column",
  alignItems: "flex-end",
}));

const Container = styled("div")(() => ({
  marginBottom: "15px",
}));

const StyledLabel = styled("label")(() => ({
  fontWeight: "600",
  fontSize: "1.125rem",
  lineHeight: "1.6875rem",
  margin: "0 1.25rem 0 0",
}));


