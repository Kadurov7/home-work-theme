import React from 'react'
import styled from 'styled-components'

const SummaruInfoCard = () => {
  return (
    <Card>
    <StyleTitle>Delicious Food, Delivered To You</StyleTitle>
    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
         lunch or dinner at home.</p>
    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by
         experienced chefs!</p>
    </Card>
  )
}

export default SummaruInfoCard;

const Card = styled.div`
  background-color:#383838;
  max-width: 53.375rem;
  position: relative;
  padding: 36px 54px;
  margin: -12rem auto;
  color: white;
  text-align: center;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  
  line-height: 24px;
`
const StyleTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`