import React from 'react'
import styled from 'styled-components'


interface iCard {
    img?: any,
    title? : string,
    amount? : string,
    word? : string,
}

const Card: React.FC<iCard> = ({img, title, amount, word}) => {
  return (
    <div>
        <Main>
            <PicsHolder>
                <Pics src={img}/>
            </PicsHolder>

            <WriteUps>
                <Left>
                    <Up>{title}</Up>
                    <Down>{word}</Down>
                </Left>
                <Right>
                    <Down>From</Down>
                    <Up>{amount}</Up>
                </Right>
            </WriteUps>
        </Main>
    </div>
  )
}

export default Card

const Right = styled.div``
const Down = styled.div`
margin-top: 8px;
`

const Up = styled.div`
font-size: 30px;
font-weight: 600;
`

const Left = styled.div`
`
const WriteUps = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
/* background-color: aliceblue; */
margin-top: 40px;
`

const Pics = styled.img`
width :100% ;
object-fit: cover;
`
const PicsHolder = styled.div`
width: 100%;
height: 370px;
background-color: yellow;
`

const Main = styled.div`
width: 600px;
height: 480px;
margin-right: 30px;
`