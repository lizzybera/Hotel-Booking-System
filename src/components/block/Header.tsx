import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../assets/hoteller-modern-logo-black.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [drop, setDrop] = useState(false)

  const Toggle = () =>{
    setDrop(!drop)
  }

  const [show, setShow] = useState<boolean>(false)

  const onChange = ()=>{
    if (window.scrollY >= 70){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  window.addEventListener("scroll", onChange)

  return (
    <div>
     {
      show?  
      <Container bg='white' color='black'>
      <Main>
        <LogoDiv>
          <Logo src={img}/>
        </LogoDiv>

        <MainHolder>
        <Holder>
          <NavHolder>
            <Navs>Home</Navs>
            <Navs onClick={Toggle}>Our Rooms <Icon /></Navs>
            <Navs>Contact</Navs>
          </NavHolder>

            <Button>Book Now</Button>
        </Holder>
        <Line />
        </MainHolder>
      </Main>
    </Container>
    :
    <Container bg='' color='white'>
    <Main>
      <LogoDiv>
        <Logo src={img}/>
      </LogoDiv>

      <MainHolder>
      <Holder>
        <NavHolder>
          <Navs>Home</Navs>
          <Navs onClick={Toggle}>Our Rooms <Icon /></Navs>
          <Navs>Contact</Navs>
        </NavHolder>
          <Button>Book Now</Button>
      </Holder>
      <Line />
      </MainHolder>

      {drop ? (
        <Drop>
          <H4 to="/superior">Superior room</H4>
          <H4 to="/signature">Signature room</H4>
          <H4 to="/deluxe">Deluxe room</H4>
          <H4 to="/luxury">Luxury Suite</H4>
        </Drop>
      )  : null}

    </Main>
  </Container>
     }
    </div>
  )
}

export default Header
const H4 = styled(NavLink)`
font-size: 20px;
text-decoration: none;
cursor: pointer;
color: white;
height: 30px;
`
const Drop = styled.div`
  position: absolute;
  width: 170px;
  flex-direction: column;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: black;
  top: 85px;
  left: 250px;

`

const Icon  = styled(RiArrowDropDownLine)`
font-size: 25px;
margin-left: 10px;
margin-top: 3px;
`

const Line = styled.div`
width: 100%;
height: 1px;
background-color: white;

@media screen and (max-width: 580px) {
  display: none;
}
`
const MainHolder = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
  
const Button = styled.div`
background-color: black;
width: 140px;
height: 45px;
color: white;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 350ms;
border: 2px solid black;

:hover{
  background-color: transparent;
  border: 2px solid white;
}

@media screen and (max-width: 580px) {
  display: none;
}
`

// const ButtonHolder = styled.div`

// `

const Navs = styled.div`
font-size: 15px;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
`

const NavHolder = styled.div`
display: flex;
width: 35%;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 666;

@media screen and (max-width: 580px) {
  display: none;
}
`
const Holder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70%;
`

const Logo = styled.img`
height: 40px;
`

const LogoDiv = styled.div`
width: 100px;
height: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`

const Container = styled.div<{bg: string, color: string}>`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 85px;
position: fixed;
z-index: 99;
color: ${({color})=> color};
background-color: ${({bg})=> bg};
transition: all 300ms;
`