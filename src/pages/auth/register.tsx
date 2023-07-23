import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createUser } from '../../utils/authAPIs'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const model = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup?.ref('password')])
    })

    const{
register, reset, handleSubmit, formState : {errors} 
    }=useForm({
        resolver : yupResolver(model)
    })

    const onhandleSubmit = handleSubmit((data : any)=>{
       const { email, password, name} = data
       createUser({
        email, password, name, avatar: name.charAt(0).toUpperCase()
       }).then(()=>{
        navigate("/signIn")
       })

       reset()
    })

  return (

    <div>
        <Container>
            <Main onSubmit={onhandleSubmit}>
                <Up> Sign Up</Up>
                <InputHolder>
                    <Name> UserName </Name>
                    <Input 
                    {...register("name")}
                    placeholder="input UserName"/>
                    {errors.name && <Error>error</Error>}
                </InputHolder>

                <InputHolder>
                    <Name> email </Name>
                    <Input 
                    {...register("email")}
                    placeholder="input email"/>
                    {errors.email && <Error>error</Error>}
                </InputHolder>

                <InputHolder>
                    <Name> Password </Name>
                    <Input 
                    {...register("password")}
                    placeholder="input Password"/>
                    {errors.password && <Error>error</Error>}
                </InputHolder>


                <InputHolder>
                    <Name> Confirm Password </Name>
                    <Input 
                    {...register("confirm")}
                    placeholder="input Password"/>
                    {errors.confirm && <Error>error</Error>}
                </InputHolder>

                <Button type='submit'> SIGN UP </Button>
                <Link to="/signIn" style={{"textDecoration" : "none"}}> <Sign > sign in </Sign> </Link>
            </Main>
        </Container>
    </div>
  )
}

export default Register

const Sign = styled.div`
font-size: 15px;
color: blue;
margin-top: 15px;
margin-bottom: 15px;
text-decoration: none;
`
const Button = styled.button`
width: 90%;
height: 40px;
outline: none;
border: none;
font-weight: 700;
color: white;
background-color: #1aa7cf;
cursor: pointer;
margin-top: 15px;
`
const Error = styled.div`
font-size: 10px;
color: red;
`
const Input = styled.input`
outline: none;
border: 1px solid #1aa7cf;
border-radius: 5px;
background-color: transparent;
width: 90%;
padding-left: 10px;
height: 40px;
margin-top: 5px;
`
const Name = styled.div`
font-size: 15px;
display: flex;
justify-content: left;
`

const InputHolder = styled.div`
margin-top: 10px;
width: 90%;
height: 80px;
/* background-color: aliceblue; */
/* display: flex; */
/* align-items: center; */
/* flex-direction: column; */
`
const Up = styled.div`
font-size: 25px;
font-weight: 700;
margin: 10px 0;
`

const Main = styled.form`
min-height: 400px;
width: 400px;
border: 1px solid silver;
border: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* border: 2px solid blue; */
border-radius: 15px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Container = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: rgb(34,193,195);
background: linear-gradient(236deg, rgba(34,193,195,1) 0%, rgba(45,253,60,0.9009978991596639) 77%);
`