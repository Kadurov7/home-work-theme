import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {border, borderRadius, styled} from "@mui/system";
import BasketButton from './BasketButton';
import { getBasket } from '../../store/basket/basketSlice';
import { uiActions } from "../../store/uiSlice";
import Button from '../UI/Button';

const Header = ({onShowBasket}) => {
   
  const dispatch = useDispatch()

  const items = useSelector((state)=> state.basket.items)
  const [animationClass, setAnimationClass] = useState("")
  const themeMode = useSelector((state) => state.ui.themeMode);


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

 
  const themeChangeHandler = ()=>{
    const theme = themeMode === "light" ? " dark" :"light";
    dispatch(uiActions.changeTheme(theme))
  }

  return (
    <Container>
        <Logo>ReactMeals</Logo>
        <BasketButton  
         onClick={onShowBasket} 
         className={animationClass}
         count={calculeteTotalAmount()}>
        </BasketButton>
  <StyledButton onClick={themeChangeHandler}>
    { themeMode === "light" ? " Dark YOOO " : " light YOOO" }
  </StyledButton>
    </Container>
  )
}

export default Header;

const Container = styled("header")(({theme})=>({
  width: "100%",
  position: "fixed",
  zIndex: 1,
  top: 0,
  height: "101px",
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  alignItems:"center",
  justifyContent: "space-between",
  paddingLeft:"120px",
  paddingRight: "120px",
}))
    

const Logo = styled("p")(()=>({
  fontWeight: 600,
  fontSize: "38px",
  lineHeight: "57px",
  color: "#FFFFFF",
  margin: 0,

}));
  
const StyledButton = styled("button")(()=> ({
  height:"9vh",
  width:"10vw",
  borderRadius:"8px",
  border:"none",
  backgroundColor:"#11737a",
  color:"white",
  fontSize:"17px",

  '&:hover' :{
    backgroundColor:"#04066b",
    cursor:"pointer"
  }
}))

