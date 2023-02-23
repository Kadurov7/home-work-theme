import React from 'react'
import styled from 'styled-components'
import MealItemForm from './MealItemForm'

const MealItem = ({item}) => {

  
  return (
   
        <Container>
        <StyledIyemInfo>
          <StyledTitle>{item.title}</StyledTitle>
          <p>{item.descreption}</p>
          <span>${item.price}</span>
        </StyledIyemInfo>
        <MealItemForm id={item._id} title={item.title} price={item.price}/> 
      </Container>
  
  )
}


export default MealItem;
const Container = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D6D6D6;
    margin-bottom: 20px;
    :last-child{
      border: none; 
      margin-bottom: 0;
    }
`
const StyledIyemInfo = styled.div`
    margin-bottom: 20px;
 p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    font-style: italic;
    margin: 0;
    margin-top: 4px;
    }
    span{
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #AD5502;
    }
`
const StyledTitle = styled.h4`
    color: #222222;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    margin: 0;
`


