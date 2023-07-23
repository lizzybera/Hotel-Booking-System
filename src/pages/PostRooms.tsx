import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import { signUser } from '../utils/authAPIs'

const Register = () => {

    const navigate = useNavigate()

    const model = yup.object({
        roomName: yup.string().required(),
        roomSize: yup.string().required(),
        detailsOfRoom: yup.string().required()
    })

    const{
register, reset, handleSubmit, formState : {errors} 
    }=useForm({
        resolver : yupResolver(model)
    })

    const onhandleSubmit = handleSubmit((data : any)=>{
       const { roomName, roomSize, detailsOfRoom, isAvalable } = data
       signUser({
        roomName, roomSize, detailsOfRoom, isAvalable
       }).then(()=>{
        navigate("/signIn")
       })

       reset()
    })

  return (

    <div>
        <Container>
            <Main onSubmit={onhandleSubmit}>
                <Up> Upload Rooms </Up>
                <InputHolder>
                    <Name> Room Name </Name>
                    <Input 
                    {...register("roomName")}
                    placeholder="input room name"/>
                    {errors.roomName && <Error>error</Error>}
                </InputHolder>

                <InputHolder>
                    <Name> Room size </Name>
                    <Input 
                    {...register("roomSize")}
                    placeholder="input room size"/>
                    {errors.roomSize && <Error>error</Error>}
                </InputHolder>

                <InputHolder>
                    <Name> Room Description </Name>
                    <TextArea 
                    {...register("detailsOfRoom")}
                    placeholder="input Room Description"/>
                    {errors.detailsOfRoom && <Error>error</Error>}
                </InputHolder>

                <Button type='submit'> SIGN UP </Button>
                <Link to="/signIn"> <Sign > Go Back </Sign> </Link>
            </Main>
        </Container>
    </div>
  )
}

export default Register

const TextArea = styled.textarea`
outline: none;
border: 1px solid blue;
width: 90%;
padding-left: 10px;
height: 40px;
margin-top: 5px;
`

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