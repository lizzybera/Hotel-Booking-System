import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <div>
        <Main>
            View Our Room
        </Main>
    </div>
  )
}

export default Button

const Main = styled.div`
    /* padding: 10px 10px; */
    width: 180px;
    height: 55px;
    background-color: transparent;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    transition: all 350ms;
    margin-top: 30px;

:hover{
    margin-top: 20px;
    cursor: pointer;
}
`