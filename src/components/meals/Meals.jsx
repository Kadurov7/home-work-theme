import React, { useEffect} from 'react'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { getMeals } from '../../store/mealsReducer/mealsSlice'
import MealItem from './meal-item/MealItem'
import { styled} from "@mui/system" 

const Meals = () => {

  const dispatch = useDispatch()

  const {meals, error, isLoading} = useSelector((state)=> state.meals);

  console.log(meals);
  
 useEffect(()=>{
    dispatch(getMeals())
 },[dispatch])
  

  return (
    <Card>
      {isLoading && !error && <p>loading</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <StyleUl>
      {meals.map((item)=>(
         <MealItem key={item._id}
                   item={item}/>
      ))}
      </StyleUl>
    </Card>
  )
}

export default memo(Meals);

const Card = styledComponents.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 75%;
  padding: 40px 40px 36px 40px;
  margin: 40px auto;
`
const StyleUl = styled("ul")(({ theme})=> ({
  listStyle:"none",
  padding: "20px 40px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));