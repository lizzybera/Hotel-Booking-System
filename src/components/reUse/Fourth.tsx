import React from 'react'
import styled from 'styled-components'
import {BsFacebook, BsInstagram, BsTwitter, BsEyeglasses } from "react-icons/bs"
import img from "../../assets/girl-in-the-pool-on-a-sunset-background-F5LL5H7-700x466.jpg"
import img2 from "../../assets/floating-breakfast-at-amazing-hotel-villa-in-blue-2021-04-06-20-00-21-utc.jpeg"
import img4 from "../../assets/housekeeper-cleaning-a-hotel-room-2021-04-02-19-56-56-utc.jpeg"
import img3 from "../../assets/julian-hochgesang-nqZv8jtwLTY-unsplash.jpeg"

const Fourth = () => {
  return (
    <div>
        <Container>
            <Main>
            <Mains>
                        <Up>
                        <Line />
                        <Title>SOCIALS</Title>
                        </Up>

                        <Div2>
                            <Icon> <BsFacebook /></Icon>
                            <Icon><BsTwitter /></Icon>
                            <Icon><BsEyeglasses /></Icon>
                            <Icon><BsInstagram /></Icon>
                        </Div2>
                </Mains>

                <PicsHolder>
                  <Divs src={img}></Divs>
                  <Divs src={img2}></Divs>
                  <Divs src={img3}></Divs>
                  <Divs src={img4}></Divs>
                </PicsHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Fourth

const Divs = styled.img`
width: 25%;
height: 300px;
background-color: yellow;
object-fit: cover;
`

const PicsHolder = styled.div`
display: flex;
width: 100%;
height: 300px;
background-color: red;
`

const Icon = styled.div`
font-size: 25px;
margin-left: 15px;
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
margin-right: 15px;
margin-top: -10px;
background-color: black;
`

const Mains = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
align-items: center;
`

const Div2 = styled.div`
display: flex;
`

const Up = styled.div`
height: 250px;
display: flex;
justify-content: center;
align-items: center;
/* width: 100%; */
`

const Main = styled.div`
width: 100%;
height: 500px;
display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
/* background-color: green; */
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
/* background-color: aliceblue; */
`