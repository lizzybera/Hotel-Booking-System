import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { signUser } from '../../utils/authAPIs'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { createUser } from '../../global/Authglobal'

const SignIn = () => {

    const navigate = useNavigate()
    const user = useSelector((state : any) => state.user)
    const dispatch = useDispatch()

    const model = yup.object({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const{
register, reset, handleSubmit, formState : {errors} 
    }=useForm({
        resolver : yupResolver(model)
    })

    const onhandleSubmit = handleSubmit((data : any)=>{
       const { email, password} = data
       signUser({
        email, password
       }).then((res)=>{
        dispatch(createUser(res))
        console.log(user);
        
        navigate("/")
       })

       reset()
    })

  return (

    <div>
        <Container>
            <Main onSubmit={onhandleSubmit}>
                <Up> Sign In</Up>

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

                <Button type='submit'> SIGN IN </Button>
                <Link to="/register"> <Sign > sign up </Sign> </Link>
            </Main>
        </Container>
    </div>
  )
}

export default SignIn

const Sign = styled.div`
font-size: 15px;
color: blue;
margin-top: 15px;
margin-bottom: 15px;
`
const Button = styled.button`
width: 90%;
height: 40px;
outline: none;
border: none;
font-weight: 700;
color: white;
background-color: #248eea;
cursor: pointer;
margin-top: 15px;
`
const Error = styled.div`
font-size: 10px;
color: red;
`
const Input = styled.input`
outline: none;
border: 1px solid blue;
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
border: 2px solid blue;
border-radius: 15px;
`

const Container = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`