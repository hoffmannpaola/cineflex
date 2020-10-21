import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';


export default function Assentos() {
  const { clickedMovie, availableSeats, clickedSeats, section, setClickedSeats } = useContext(MoviesContext);
  const {posterURL, title} = clickedMovie;
  // console.log(availableSeats);
  // console.log(clickedSeats);
  // console.log(section);

  
    return (
      <>
        <Title>Selecione o(s) Assentos(s)</Title>
        <StyleContainer>
        
          {availableSeats.map(seat =>
            <StyleBox key={seat.id} onClick={ () => setClickedSeats([...clickedSeats, seat])}>
                <div></div>
                <li>{seat.name}</li>
            
                  
            </StyleBox>)}
        </StyleContainer>
        <StyleLegend>
            <li> <div></div> <span> Selecionado </span> </li>
            <li> <div></div> <span>Disponível </span> </li>
            <li> <div></div> <span>Indisponível </span> </li>
        </StyleLegend>
        <Button>
          <div>Reservar Assentos(s)</div>
        </Button>
        <Footer>
          <img src={posterURL}/>  
          <div>
            {title}
            
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

  
    div {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: grey;
      margin-top: 10px;
      margin-left: 7px;
      margin-right: 7px;

    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      

      span {
        padding-top: 10px;
      }
      
    }
    
  `;

  
  const StyleBox = styled.div ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

   
    div {
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background-color: grey;
      margin-top: 10px;
      margin-left: 7px;
      margin-right: 7px;

    }

    li {
      margin-top: 1px;
      font-size: 0.5rem;
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