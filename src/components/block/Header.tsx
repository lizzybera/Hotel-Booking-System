import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../assets/hoteller-modern-logo-black.png"
import {RiArrowDropDownLine} from "react-icons/ri"

const Header = () => {

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
            <Navs>Our Rooms <Icon /></Navs>
            <Navs>Contact</Navs>
          </NavHolder>

          {/* <ButtonHolder> */}
            <Button>Book Now</Button>
          {/* </ButtonHolder> */}
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
          <Navs>Our Rooms <Icon /></Navs>
          <Navs>Contact</Navs>
        </NavHolder>
          <Button>Book Now</Button>
      </Holder>
      <Line />
      </MainHolder>

    </Main>
  </Container>
     }
    </div>
  )
}

export default Header

const Icon  = styled(RiArrowDropDownLine)`
font-size: 25px;
margin-left: 10px;
margin-top: 3px;
`

const Line = styled.div`
width: 100%;
height: 1px;
background-color: white;
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