import React from 'react'
import styled from 'styled-components'
import Button from '../static/Button'
import Card from '../static/Card'
import img from "../../assets/chastity-cortijo-R-w5Q-4Mqm0-unsplash.jpg"
import img2 from "../../assets/francesca-tosolini-tHkJAMcO3QE-unsplash-1024x683.jpg"

const Third = () => {
  return (
    <div>
        <Container>
            <Main>
                <Mains>
                        <Up>
                        <Line />
                        <Title>THE GRAND AMENITIES</Title>
                        </Up>

                        <Div2>
                            <Button 
                            b='1px solid black'
                            text='VIEW ALL ROOMS'
                            />
                        </Div2>
                </Mains>
                <Down>
                    <Card 
                    img={img}
                    title='Signature Room'
                    amount='$900'
                    word='70 m2/ 3 adults 2 children'
                    />
                    <Card 
                    img={img2}
                    title='Signature Room'
                    amount='$900'
                    word='70 m2/ 3 adults 2 children'
                    />
                </Down>
            </Main>
        </Container>
    </div>
  )
}

export default Third

const Mains = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`
const Down = styled.div`
display: flex;
`

const Div2 = styled.div``

const Title = styled.div`
font-size: 55px;
font-weight: 700;
width: 400px;
line-height: 1.1;
`

const Line = styled.div`
height: 5px;
width: 50px;
margin-right: 20px;
margin-top: -80px;
background-color: black;
`

const Up = styled.div`
height: 280px;
background-color: #F0F0F0;
display: flex;
justify-content: center;
align-items: center;
/* width: 100%; */
`

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 85%;
height: 100%;
`

const Container = styled.div`
width: 100%;
min-height: 500px;
background-color: red;
background-color: #F0F0F0;
display: flex;
justify-content: center;
align-items: center;
padding: 60px 0;
`