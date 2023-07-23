import React from "react";
import styled from "styled-components";
import BookHero from "../components/static/BookHero";
import img from "../assets/francesca-tosolini-tHkJAMcO3QE-unsplash-1024x683.jpg";
import img2 from "../assets/noun_Fitness_2071916.png";
// import { useQuery } from "@tanstack/react-query"
// import { readRooms } from "../utils/roomAPIs";

// const {data} = useQuery({
//     queryKey : ["rooms"],
//     queryFn : readRooms,
//     refetchInterval : 1000
// })

// const [show, setShow] = useState<any>([]);

// useEffect(() => {
//   readRooms().then((res: any) => {
//     setShow(res);
//   });
// });
const BookNow = () => {
  return (
    <div>
      <BookHero />
      <Container>
        <Main>
          

          <Contain>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
          </Contain>

          <Holder fd="row-reverse">
            <Left>
              <Mains>
                <Up>
                  <Line />
                  <Title>SIGNATURE ROOMS</Title>
                </Up>
              </Mains>
              <WriteUps>
                <Text>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                </Text>
              </WriteUps>
            </Left>
            <Right>
              <Pics src={img} />
            </Right>
          </Holder>

          <Contain>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
          </Contain>

          <Holder fd="">
            <Left>
              <Mains>
                <Up>
                  <Line />
                  <Title>DELUXE ROOMS</Title>
                </Up>
              </Mains>
              <WriteUps>
                <Text>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                </Text>
              </WriteUps>
            </Left>
            <Right>
              <Pics src={img} />
            </Right>
          </Holder>

          <Contain>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
          </Contain>

          <Holder fd="row-reverse">
            <Left>
              <Mains>
                <Up>
                  <Line />
                  <Title>
                    LUXURY <br /> SUITE
                  </Title>
                </Up>
              </Mains>
              <WriteUps>
                <Text>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                </Text>
              </WriteUps>
            </Left>
            <Right>
              <Pics src={img} />
            </Right>
          </Holder>

          <Contain>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
            <Div>
              <Pics2 src={img2} />
              <Name>Bed</Name>
            </Div>
          </Contain>
        </Main>
      </Container>
    </div>
  );
};

export default BookNow;

const Pics2 = styled.img`
  height: 50px;
  object-fit: cover;
`;

const Pics = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 150px; */
`;

const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  width: 300px;
`;

const WriteUps = styled.div`
  margin-left: 70px;
`;

const Mains = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 55px;
  font-weight: 700;
  width: 400px;
  line-height: 1.1;
`;

const Line = styled.div`
  height: 5px;
  width: 50px;
  margin-right: 20px;
  margin-top: -80px;
  background-color: black;
`;

const Up = styled.div`
  height: 280px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Right = styled.div`
  width: 60%;
  min-height: 500px;
  background-color: red;
`;
const Left = styled.div`
  width: 40%;
  min-height: 500px;
  margin-left: 20px;
`;
const Holder = styled.div<{ fd: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* flex-direction: column; */
  min-height: 500px;
  flex-direction: ${({ fd }) => fd};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content:space-between; */
  align-items: center;
  width: 80%;
  min-height: 500px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
