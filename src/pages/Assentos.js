import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";

export default function Assentos() {
  const { clickedMovie, availableSeats, selectingSeats, weekday, time, clickedSeats, reserveSeat, resetSeats } = useContext(MoviesContext);
  const { posterURL, title } = clickedMovie;

    return (
      <>
        <Title>Selecione o(s) Assentos(s)</Title>

        <StyleContainer>
          {availableSeats.map(seat =>
            <StyleBox key={seat.id}>

                  {seat.isAvailable 
                    ?  (clickedSeats.some( seatInArray => seatInArray.id === seat.id) 
                        ? <><Seat  color="#8DD7CF" onClick={ () => selectingSeats(seat)}><MdEventSeat /></Seat ><li>{seat.name}</li></> 
                        : <><Seat  color="#C3CFD9" onClick={ () => selectingSeats(seat)}><MdEventSeat /></Seat ><li>{seat.name}</li></>)
                    
                    :  (<><Seat  color="#FBE192" onClick={ () => selectingSeats(seat)}><MdEventSeat /></Seat ><li>{seat.name}</li></>  ) }
                     
            </StyleBox>)}
        </StyleContainer>

        <StyleLegend>
          <li> 
            <ColorLegend color="#8DD7CF"><MdEventSeat /></ColorLegend> 
            <span> Selecionado </span> 
          </li>
          <li> 
            <ColorLegend color="#C3CFD9"><MdEventSeat /></ColorLegend> 
            <span>Disponível </span> 
          </li>
          <li> 
            <ColorLegend color="#FBE192"><MdEventSeat /></ColorLegend> 
            <span>Indisponível </span> 
          </li>
        </StyleLegend>

        <Link to="/sucesso">
          <Button  onClick={ () => reserveSeat() }>
            <div> Reservar Assentos(s) </div>
          </Button>
        </Link>

        <Link to="/sessoes" >             
          <PreviousPage>
            <div onClick={ () => resetSeats()}>
              <BsFillCaretLeftFill /> 
            </div>
          </PreviousPage>
        </Link>

        <Footer>
          <img src={posterURL}/>  
          <div>
              <li> 
                {title} 
              </li>

              <li> 
                <span>{weekday[0]} - {time}</span> 
              </li>
          </div>
        </Footer>  
          
      </>
    )
  }

const Title = styled.h1 `
  margin-top: 80px;
  font-size: 1.1rem;
  text-align: center;
`;

const StyleContainer = styled.div ` 
  margin-top: 15%;
  margin: 5%;
  padding-bottom: 5%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5%;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.05);
`;

const StyleLegend= styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10%;
  margin-left: 4%;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      
        span {
          padding-top: 10px;
        }
    }
`;

const ColorLegend = styled.div `
  font-size: 1.7rem;
  border-radius: 50%;
  color: ${(props) => props.color};
  margin-top: 10px;
  margin-left: 7px;
  margin-right: 7px;
`;

const StyleBox = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
    li {
      margin-top: 1px;
      font-size: 0.5rem;
    }
`;

const Seat = styled.div `
  font-size: 1.5rem;
  margin-top: 10px;
  margin-left: 7px;
  margin-right: 5px;
  color: ${(props) => props.color};
`;

const Button = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: orange;
      padding: 5px;
      width: 50%;
      height: 30px;
      color: white;
      border-radius: 5px 5px 5px 5px;
    }
`;

const PreviousPage = styled.div `
  width: 100%;
  height: 30px;
  font-size: 2rem;
  margin-bottom: 40%;
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  
    div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      }
`;

const Footer = styled.div `
  width: 100%;
  height: 110px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  background-color: #C3CFD9;

    div {
      margin-top: 7px;
      display: flex;
      flex-direction: column;
      
        span {
          font-weight: bolder;
        }

        li {
          margin-top: 7px;
        }
    }

    img {
      width: 60px;
      border: 5px solid white;
      margin-right: 10px;
      margin-left: 5px;
    }
`;