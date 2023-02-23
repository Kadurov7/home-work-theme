import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BasketButton from './BasketButton';
import { getBasket } from '../../store/basket/basketSlice';


const Header = ({onShowBasket}) => {
   
  const dispatch = useDispatch()

  const items = useSelector((state)=> state.basket.items)
  const [animationClass, setAnimationClass] = useState("")


  useEffect(()=>{
    dispatch(getBasket())
  },[dispatch])

  const calculeteTotalAmount = ()=>{
    const sum = items.reduce((s, item )=>{
      return s + item.amount
    },0)                                              
    return sum
  }
 useEffect(()=>{
   setAnimationClass('bump')
   
   const id = setTimeout(()=>{
    setAnimationClass("")
   },600)

    return ()=>{
      clearTimeout(id)
    }

 },[items])
  return (
    <Container>
        <Logo>ReactMeals</Logo>
        <BasketButton  
         onClick={onShowBasket} 
         className={animationClass}
         count={calculeteTotalAmount()}>
        </BasketButton>
    </Container>
  )
}

export default Header;

const Container = styled.header`
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    height: 101px;
    background-color: #8A2B06;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:120px;
    padding-right: 120px;
`
const Logo = styled.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0;
`
