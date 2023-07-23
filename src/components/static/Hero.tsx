import React from 'react'
import styled from 'styled-components'
import img from "../../assets/tallinn-estonia-view-of-historical-rotermann-cit-2021-04-04-18-33-30-utc-440x293.jpg"
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>

      <Div>

      <Text>LIVE THE EXPERIENCE</Text>

      <Title>MAKE
YOURSELF
AT HOME</Title>
<ButtonHolder>
    <Button 
    b='2px solid white'
    text='VIEW OUR ROOMS'
    />
</ButtonHolder>
      </Div>
        </Main>
      </Container>
    </div>
  )
}

export default Hero

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