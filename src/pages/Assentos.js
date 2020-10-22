import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';


export default function Assentos() {
  const { clickedMovie, availableSeats, selectingSeats, weekday, time, clickedSeats} = useContext(MoviesContext);
  const { posterURL, title} = clickedMovie;
  
  console.log(clickedSeats);
  // console.log(section);
  //console.log(clickedMovie);
  

    return (
      <>
        <Title>Selecione o(s) Assentos(s)</Title>
        <StyleContainer>
        
          {availableSeats.map(seat =>
            <StyleBox key={seat.id}>
                  
                 
                  {seat.isAvailable 
                    ?  (clickedSeats.some( seatInArray => seatInArray.id === seat.id) 
                        ? <><Seat  color="#8DD7CF" onClick={ () => selectingSeats(seat)}></Seat ><li>{seat.name}</li></> 
                        : <><Seat  color="#C3CFD9" onClick={ () => selectingSeats(seat)}></Seat ><li>{seat.name}</li></>)
                    
                    :  (<><Seat  color="#FBE192" onClick={ () => selectingSeats(seat)}></Seat ><li>{seat.name}</li></>  ) }
                  
                 
            </StyleBox>)}
        </StyleContainer>
        <StyleLegend>
            <li> <ColorLegend color="#8DD7CF"></ColorLegend> <span> Selecionado </span> </li>
            <li> <ColorLegend color="#C3CFD9"></ColorLegend> <span>Disponível </span> </li>
            <li> <ColorLegend color="#FBE192"></ColorLegend> <span>Indisponível </span> </li>
        </StyleLegend>
        <Button>
          <div>Reservar Assentos(s)</div>
        </Button>
        <Footer>
          <img src={posterURL}/>  
          <div>
            <li>{title} </li>
            <li> <span> {weekday} - {time} </span> </li>
          </div>
        </Footer>  
          
      </>
    )
  }

  const Title = styled.h1 `
    margin-top: 30%;
    font-size: 1.1rem;
    text-align: center;
  
  
  `;
  const StyleContainer = styled.div ` 
    margin-top: 15%;
    margin: 5%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    // box-shadow: 0 0 0.3em grey;

  `;

  const StyleLegend= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10%;

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
 
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: ${(props) => props.color};
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

    width: 17px;
    height: 17px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 7px;
    margin-right: 5px;
    background-color: ${(props) => props.color};

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
    }

    img {
      width: 60px;
      border: 5px solid white;
      margin-right: 10px;
      margin-left: 5px;
    }

    
   `;

   const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;

   
   
   div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: orange;
      width: 60%;
      height: 30px;
      color: white;
      
   
    }
    
   
   
   `;