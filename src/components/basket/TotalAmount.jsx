import React from 'react'
import {memo} from "react"
import Button from '../UI/Button'
import styled from 'styled-components'

const TotalAmount = ({price, onOrder, onClose}) => {

    const orderButton = 
    price > 0 ?  <Button onClick={onOrder}>Order</Button> :null

    const fixedPrice = price.toFixed(2)

  return (
    <div style={{paddingTop:'30px'}}>
        <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
        </InfoContainer>
        <ActionBtnContainer>
        <Button variant="outlaine" onClick={onClose}>Close</Button>
           {orderButton}
        </ActionBtnContainer>
    </div>
  )
}

export default memo(TotalAmount);
 const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
 `

 const Price = styled.p`
font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #8a2b0b;
  margin: 0;
 `
 const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
 `
 const ActionBtnContainer = styled.div`
    margin-top:24px;
    gap:1rem;
    display: flex;
    justify-content: flex-end;
 `