import React from 'react'
import styled from 'styled-components'
import img from "../../assets/housekeeper-cleaning-a-hotel-room-2021-04-02-19-56-56-utc.jpeg"
import Header from '../block/Header'
import Button from './Button'

const Hero3 = () => {
  return (
    <div>
      <Container>
      {/* <Header /> */}
        <Main>

        <Div>
      <Title> DELUXE ROOM</Title>
      </Div>
        </Main>
      </Container>
    </div>
  )
}

export default Hero3

const ButtonHolder = styled.div`
/* margin-top: 30px; */
height: 70px;
`

const Title = styled.div`
font-size: 70px;
margin-top: 10px;
width: 300px;
font-weight: 700;
line-height: 1.2;
`

const Text  = styled.div`
font-size: 16px;
font-weight: 700;
word-spacing: 5px;
`

const Div = styled.div`
width: 100%;
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`

const Main = styled.div`
display: flex;
/* align-items: center; */
flex-direction: column;
width: 80%;
`

const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
background-attachment: fixed;
position: relative;
`