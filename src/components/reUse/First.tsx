import React from 'react'
import styled from 'styled-components'
import img from "../../assets/two-laughing-guests-checking-in-together-at-a-hote-MUXSSNK-683x1024.jpeg"

const First = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                  <Div>
                    <Line />
                  </Div>
                  <WriteUps>
                    <Title>OUR
                    HISTORY</Title>
                    <Text>
                    Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.
<br />
<br />

                    Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar
                    </Text>
                  </WriteUps>

                </Left>

                <Right>
                    <PicsHolder>
                      <Pics src={img}/>
                    </PicsHolder>
                    <Des>
                      <Divs>
                        <Numbers>50</Numbers>
                        <Words>HOTEL ROOMS</Words>
                      </Divs>
                      <Divs>
                        <Numbers>15</Numbers>
                        <Words>ACTIVITIES</Words>
                      </Divs>
                      <Divs>
                        <Numbers>6</Numbers>
                        <Words>RESTAURANTS</Words>
                      </Divs>
                    </Des>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default First

const Words = styled.div`
font-size: 13px;
font-weight: 800;
margin-top: 5px;
`
const Numbers = styled.div`
font-size: 60px;
font-weight: 700;
color: #748A96;
`
const Divs = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* margin-top: 20px; */
height: 100%;
`
const Des = styled.div`
display: flex;
min-height: 50px;
width: 450px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
`
const Pics = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const PicsHolder = styled.div`
border: 5px solid white;
height: 750px;
width: 450px;
background-color: green;
position: absolute;
top: 640px;
`

const Right = styled.div`
width: 50%;
min-height: 830px;
background-color: #F0F0F0;
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;
`

const Text = styled.div`
font-size: 18px;
font-weight: 300;
line-height: 2;
width: 450px;
`
const Title = styled.div`
font-size: 60px;
font-weight: 600;
width: 100px;
margin-bottom: 20px;
color: #353535;
/* margin-top: 20px; */
`
const WriteUps = styled.div`
margin-left: 10px;
`

const Line = styled.div`
width: 50px;
height: 5px;
background-color: black;
margin-top: -30px;
`
const Div = styled.div`
width: 185px;
height: 500px;
display: flex;
justify-content: flex-end;
/* background-color: yellow; */
`
const Left = styled.div`
width: 50%;
height: 100%;
/* background-color: green; */
display: flex;
align-items: center;
justify-content: flex-start;
`

const Main = styled.div`
display: flex;
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 650px;
width: 100%;
/* padding: 30px 0; */
/* background-color: blue; */
`