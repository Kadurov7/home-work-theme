import React from 'react'
import styled from 'styled-components'
import BackgroundImg from "../../assets/images/summary.jpg"
import SummaruInfoCard from './SummaruInfoCard'


const Summary = () => {
  return (
    <Container>
   <StyledImg src={BackgroundImg} alt="sammary" />
   <SummaruInfoCard/>
    </Container>
  )
}

export default Summary;
const Container = styled.div`
    height:404.5px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
`
const StyledImg = styled.img`
    height: 100%;
    
`