import React from 'react'
import styled from 'styled-components'
import img from "../../assets/close-up-of-couple-at-table-in-traditional-english-2021-04-02-20-02-18-utc-1024x683.jpeg"
import img2 from "../../assets/female-chef-piping-a-cake-in-kitchen-at-hotel-2021-04-04-18-02-58-utc-768x512.jpeg"
import img3 from "../../assets/noun_Fitness_2071916.png"
import img4 from "../../assets/noun_spa-sauna-service_2701942.png"
import img5 from "../../assets/noun_Pool_4017800.png"
import img6 from "../../assets/noun_spa_2242167.png"
import img7 from "../../assets/noun_Garden_4113167.png"
import img8 from "../../assets/noun_City_4117559.png"

export const Second = () => {
  return (
    <div>
        <Container>
                <Left>
                    <Up>
                        <Line />
                        <Title>THE GRAND AMENITIES</Title>
                    </Up>
                    <Middle>
                        <Pics src={img} />
                    </Middle>
                    <Down>
                        <Pics2 src={img2}/>
                    </Down>
                </Left>
                <Right>
                <WriteUps>
                    <Text>
                    Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.
<br />
<br />

                    Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar
                    </Text>
                  </WriteUps>

                  <Div>
                    <Box>
                        <Pic3 src={img3}/>
                        <Words>FITNESS CENTER</Words>
                    </Box>
                    <Box>
                        <Pic3 src={img4}/>
                        <Words>FITNESS CENTER</Words>
                    </Box>
                    <Box>
                        <Pic3 src={img5}/>
                        <Words>FITNESS CENTER</Words>
                    </Box>
                    <Box>
                        <Pic3 src={img6}/>
                        <Words>FITNESS CENTER</Words>
                    </Box>
                    <Box>
                        <Pic3 src={img7}/>
                        <Words>FITNESS CENTER</Words>
                    </Box>
                    <Box>
                        <Pic3 src={img8}/>
                        <Words>FITNESS CENTER</Words>
                    </Box>
                  </Div>
                </Right>
        </Container>
    </div>
  )
}


const Words = styled.div`
font-size: 12px;
font-weight: 700;
margin-top: 10px;
/* word-spacing: 3px; */
`

const Pic3 = styled.img`
height: 30px;
object-fit: cover;
`

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;
margin-left: 20px;
`

const Div = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
width: 450px;
margin-top: 20px;
margin-bottom: 100px;
`

const Text = styled.div`
font-size: 18px;
font-weight: 300;
line-height: 2;
width: 450px;
`

const WriteUps = styled.div`
margin-left: 10px;
`
const Pics2 = styled.img`
border: 2px solid white;
width: 300px;
height: 180px;
background-color: green;
position: absolute;
top: -100px;
right: 100px;
`
const Down = styled.div`
width: 100%;
height: 120px;
background-color: #F0F0F0;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

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


const Pics = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Middle = styled.div`
width: 100%;
height: 450px;
background-color: yellow;
`

const Up = styled.div`
height: 280px;
background-color: #F0F0F0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

const Right = styled.div`
width: 50%;
min-height: 500px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Left = styled.div`
width: 50%;
min-height: 500px;
background-color: red;
`


const Container = styled.div`
width: 100%;
min-height: 500px;
background-color: white;
display: flex;
justify-content: space-between ;
align-items: center;
`
