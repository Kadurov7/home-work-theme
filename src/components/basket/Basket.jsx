import React from 'react'
import {Modal as MuiModal} from "@mui/material"
import {Box} from "@mui/material"
import TotalAmount from './TotalAmount'
import styled from 'styled-components'
import BasketItem from './BasketItem'
import { useDispatch, useSelector } from 'react-redux'
import {deleteBasketItem, submitOrder, uptadeBasketItem} from "../../store/basket/basketSlice"
import { uiActions } from '../../store/uiSlice'



const Basket = ({onClose, open}) => {

const dispatch = useDispatch();
const {items }= useSelector((state)=> state.basket)


const getTotalPrice = ()=>{
  return items.reduce((sum, {price, amount})=> sum + amount * price, 0)
}
  const decrementAmount = (id, amount)=>{
      if(amount > 1) {
        dispatch(uptadeBasketItem({amount: amount - 1, id}))
      }
      else{
        dispatch(deleteBasketItem(id))
      }
  }
  const incrementAmount = (id, amount)=>{
   dispatch( uptadeBasketItem({amount:amount + 1, id }))

  }

 
  const orderSubmitHandler = async ()=>{
    try{
       await dispatch(submitOrder({orderData: {items},  
      })).unwrap();
      dispatch(uiActions.showSnackbar({
        isOpen: true,
        severity: "success",
        massage: "Order completed successfully"
      }))
    }
    catch(error){
      console.log(error);
     dispatch(uiActions.showSnackbar({
      isOpen: true,
      severity: "error",
      massage:"NOOOO"
     }))
    } finally {
      onClose();
    }
   
  }
  return (
    <>
   
      <MuiModal onClose={onClose} open={open}>
        <Styled>
        <Content>
          {items.length ?(<FixedContainer>
          {items.map((item)=> (
            <BasketItem 
                   key={item._id}
                   incrementAmount={()=>incrementAmount(item._id, item.amount)}
                   decrementAmount={()=>decrementAmount(item._id, item.amount)}
                   title={item.title}
                   price={item.price}
                   amount={item.amount}/>
          )) }
          </FixedContainer>) : null}
          
        <TotalAmount price={getTotalPrice()} onClose={onClose} onOrder={orderSubmitHandler} />
        </Content>
        </Styled>
      </MuiModal>
    </>
  )
}

export default Basket;
const Content = styled.div`
  width:100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`
const FixedContainer = styled.div`
  height: 228px;
  overflow-y: scroll;

`
const Styled = styled(Box)`
  position: fixed;
top: 20vh;
left: 5%;
width: 90%;
background-color: white;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation: slide-down 300ms ease-out forwards;
width: 40rem;
left: calc(50% - 20rem);

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`