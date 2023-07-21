import React, { useState } from "react";
import styled from "styled-components";
// import { BsImageFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InputRoom = () => {
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [summary, setSummary] = useState("");
  // const [author, setAuthor] = useState("");
  // const [category, setCategory] = useState("");

  const handleImage = (e: any) => {
    const file = e.target.files![0];
    console.log(file);
    const previewUrl = URL.createObjectURL(file);

    setCoverImage(file);
    setPreview(previewUrl);
    console.log(preview);
  };

  const uploadData = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("coverImage", coverImage);
    formData.append("summary", summary);
    // formData.append("category", category);
    // formData.append("author", author);

    await axios
      .post("http://localhost:6589/api/v1/room/create", formData)
      .then((res) => {
        alert("upload successfull");
        navigate("/");
      });
  };

  return (
    <Container>
      <Wrapper>
        <Card>

          <Circle>
            <Img src={preview} />
          </Circle>

          <Input onChange={handleImage} id="pix" type="file" />
          <Button htmlFor="pix">Upload Room Image</Button>

          <Inp
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            placeholder="Room Name"
          />
          <Inp
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            placeholder="Room Size"
          />
          <TexArea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setSummary(e.target.value);
            }}
            placeholder="Room Details"
          />
          
            <Button2  bg="black">
              Submit
            </Button2>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default InputRoom;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button2 = styled.button<{ bg: string }>`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  margin-top: 10px;
  :hover {
    transform: scale(0.95);
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const Select = styled.select`
  width: 370px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #f8cbe0;
  padding-left: 10px;

  @media screen and (max-width: 500px) {
    width: 265px;
  }
`;

const TexArea = styled.textarea`
  width: 350px;
  height: 70px;
  border-radius: 3px;
  border: 0.7px solid blue;
  outline-color: #f8cbe0;
  padding-left: 10px;
  resize: none;

  @media screen and (max-width: 500px) {
    width: 265px;
  }
`;

const Inp = styled.input`
  margin: 10px;
  width: 350px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid blue;
  outline-color: #f8cbe0;
  padding-left: 10px;

  @media screen and (max-width: 500px) {
    width: 265px;
  }
`;

const Input = styled.input`
  display: none;
`;
const Button = styled.label`
  height: 40px;
  width: 200px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }
`;

const Circle = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  /* border-radius: 50%; */
  background-color: #e6e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  flex-direction: column;
  font-size: 30px;
  span {
    font-size: 12px;
  }
`;

const Card = styled.div`
  box-shadow: rgba(15, 37, 176, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 400px;
  /* height: 300px; */
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    width: 270px;
  }
`;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;