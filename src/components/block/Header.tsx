import React from 'react'
import styled from 'styled-components'
import img from "../../assets/hoteller-modern-logo-black.png"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoDiv>
            <Logo src={img}/>
          </LogoDiv>

          <MainHolder>
          <Holder>
            <NavHolder>
              <Navs>Home</Navs>
              <Navs>About</Navs>
              <Navs>About</Navs>
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
    </div>
  )
}

export default Header

const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver;
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

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 80px;
position: fixed;
z-index: 99;
color: white;
/* background-color: antiquewhite; */
`