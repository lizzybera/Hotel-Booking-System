import React from 'react'
import styled from 'styled-components'
import img from "../../assets/hoteller-modern-logo-black.png"
import Button from '../static/Button'

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Up>
            <Div>
              <Logo src={img}/>
              <T>
              <Text>Via Serlas 546, 6700</Text>
              <Text>St. Moritz Switzerland</Text>
              </T>
              <T>
              <Text>41 (0)54 2344 00</Text>
              <Text>revs@hoteller.com</Text>
              </T>
            </Div>

            <Div2>
              <T2><Text>  The Hotel </Text></T2>
              <T2><Text> Rooms & Suites  </Text></T2>
              <T2><Text> Experience   </Text></T2>
              <T2><Text>  Contact Us  </Text></T2>
            </Div2>

            <Div2>
              <T><Text>  Restaurant </Text></T>
              <T><Text>  Offers  </Text></T>
              <T><Text> Jobs   </Text></T>
              <T><Text> Seminars   </Text></T>
            </Div2>

            <Div3>
              <Title>“Offer more than a gift voucher, offer an experience”</Title>
              <Button 
              b='2px solid white'
              text='Book Now'
              />
            </Div3>
          </Up>
          <Line />
          <Down></Down>
        </Main>
      </Container>
    </div>
  )
}

export default Footer

const Title = styled.div`
font-weight: 700;
font-size: 20px;
width: 300px;
`

const Div3 = styled.div``

const Div2 = styled.div``

const T2 = styled.div`
margin-bottom: 30px;
`

const T = styled.div`
margin-bottom: 30px;
`
const Text = styled.div`
font-size: 15px;
`
const Logo = styled.img`
height: 50px;
margin-bottom: 20px;
`

const Div = styled.div``

const Down = styled.div`
width: 80%;
background-color: red;
height: 50px;
`

const Up = styled.div`
width: 80%;
/* background-color: blue; */
height: 400px;
border-bottom: 1px solid ;
display: flex;
justify-content: space-between;
align-items: center;
`

const Line = styled.div`
width: 100%;
height: 1px;
background-color: white;
`

const Main = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
`

const Container = styled.div`
width: 100%;
min-height: 450px;
background-color:#000000;
display: flex;
justify-content: center;
align-items: center;
color: white;
`