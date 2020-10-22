import React, { useContext } from 'react';
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';


export default function Sucesso() {
  const { clickedMovie, weekday, time, clickedSeats} = useContext(MoviesContext);
  const {title} = clickedMovie;

  
    return (
      <>
        <Title>Pedido feito <br /> com sucesso!</Title>

        <Info>
          <h1>{title}</h1>
          <h1>{weekday[1]}- {time}</h1>
        </Info>
        <Seat>
          {clickedSeats.map(seat =>
            <div key={seat.id}> 
              <h3>Assento {seat.name}</h3>
            </div>)}
        </Seat>

        <a onClick={() => {window.location.href="/"}} >
          <Button>
            <div>Home</div>
          </Button>
        </a>
        
      </>
    )
  }





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
      font-size: 1.1rem;
      font-weight: bolder;

    }
  
  
  `;

  const Seat = styled.div `
    margin-top: 10%;
    margin-left: 5%;
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    h3 {
      margin-top: 3%;
      
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
      width: 50%;
      height: 30px;
      color: white;

    }

   `;