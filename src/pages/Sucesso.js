import React, { useContext } from 'react';
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';
import { MdEventSeat } from "react-icons/md";

export default function Sucesso() {
  
  const { clickedMovie, weekday, time, clickedSeats} = useContext(MoviesContext);
  const {title} = clickedMovie;

  return (
    <>
      <Container>
        <Title>
          Pedido feito com sucesso!
        </Title>

        <Info>
          <h1> {title} </h1>
          <h1> {weekday[1]} - {time} </h1>
        </Info>

        <Seat>
          {clickedSeats.map(seat =>
            <div key={seat.id}> 
              <li> 
                <MdEventSeat color="#8DD7CF" fontSize="1.5rem"/>
                <span> Assento {seat.name}  </span>
              </li>
            </div>
          )}
        </Seat>

        <a onClick={() => {window.location.href="/"}} >
          <Button>
            <div> Home </div>
          </Button>
        </a>
      </Container>
    </>
  )
}

const Container = styled.div `
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1 `
  margin-top: 30%;
  font-size: 1.1rem;
  text-align: center;
  color: #68A398;
`;

const Info = styled.div `
  margin-top: 10%;
  margin-left: 5%;
  font-family: "Roboto", sans-serif;

    h1 {
      margin-top: 5%;
      font-size: 1.1rem;
      font-weight: bolder;
      text-align: center;
    }
`;

const Seat = styled.div `
  margin-top: 10%;
  margin-left: 5%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  li {
    width: 38%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
      
  }
`;

const Button = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: orange;
      width: 40%;
      height: 30px;
      color: white;
      border-radius: 5px 5px 5px 5px;
    }
`;