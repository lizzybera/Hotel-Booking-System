import React from 'react'
import styled from 'styled-components'

interface iButton{
  b?: string,
  text?: string
}
const Button: React.FC<iButton> = ({b, text}) => {
  return (
    <div>
        <Main b={`${b}`}>
        {text}
        </Main>
    </div>
  )
}

export default Button

const Main = styled.div<{b : string}>`
    /* padding: 10px 10px; */
    width: 182px;
    height: 58px;
    background-color: transparent;
    border: ${({b})=> b};
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