import React from 'react'
import styled from 'styled-components'
import Button from '../static/Button'

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
                            <Button />
                        </Div2>
                </Mains>
                <Down></Down>
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
const Down = styled.div``

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
height: 500px;
background-color: red;
background-color: #F0F0F0;
display: flex;
justify-content: center;
align-items: center;
`