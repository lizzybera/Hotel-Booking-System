import React from 'react'
import styled from 'styled-components'
import img from '../../assets/housekeeper-cleaning-a-hotel-room-2021-04-02-19-56-56-utc.jpeg'

const Second3 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Pics src={img}/>
                </Left>

                <Right>
                    <Title>Make a Reservation</Title>

                    <InputHolder>
                    <Name>Check-in Date *</Name>
                        <Input type='calendar'
                        placeholder='Check-in Date *'/>
                    </InputHolder>
                    <InputHolder>
                    <Name>Check-in Date *</Name>
                        <Input type='calendar' placeholder='Check-in Date *'/>
                    </InputHolder>

                    <Divs>
                    <Div>
                        <Name>Adults</Name>
                    <Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>15</option>
                        <option>16</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                    </Select>
                    </Div>
                    <Div>
                        <Name>Children</Name>
                    <Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>15</option>
                        <option>16</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                    </Select>
                    </Div>
                    </Divs>

                    <Button>Check Availabiilty</Button>
                </Right>

            </Main>
        </Container>
    </div>
  )
}

export default Second3

const Button = styled.div`
background-color: black;
width: 200px;
height: 45px;
color: white;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 350ms;
border: 2px solid black;
`

const Divs = styled.div`
display: flex;
justify-content: space-between;
`
const Div = styled.div`
justify-content: space-between;
display: flex;
margin-top: 40px;
margin-bottom: 40px;
flex-direction: column;
`
const Select = styled.select`
width: 150px;
height: 60px;
outline: none;
`
const Input = styled.input`
width: 100%;
height: 50px;
background-color: transparent;
outline: none;
border: none;
border-bottom: 1px solid black;

::placeholder{
    font-size: 16px;
}
`
    
const Name = styled.div`
font-size: 20px;
`
const InputHolder = styled.div`
margin-top: 40px;
`

const Title = styled.div`
font-size: 25px;
font-weight: 700;
margin-bottom: 10px;
`

const Pics = styled.img`
width: 100%;
height: 80%;
`

const Right = styled.div`
width: 30%;
height: 500px;
display: flex;
justify-content: center;
flex-direction: column  ;
/* align-items: center; */
margin-left: 50px;

`

const Left = styled.div`
width: 70%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`

const Main = styled.div`
width: 80%;
height: 500px;
background-color: #F0F0F0;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 600px;
background-color: #F0F0F0;
display: flex;
justify-content: center;
align-items: center;
`