import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';
import { BsFillCaretLeftFill } from "react-icons/bs";


export default function Sessoes() {
  
  const { clickedMovie, setAvailableSeats, setTime, setWeekday} = useContext(MoviesContext);
  const {days, posterURL, title} = clickedMovie;

  return (
    <> 
      <StyleSection >
        <h1> Selecione o Horário </h1>

        {days.map(day => (
            <BoxSection key={day.id} onClick={ () => setWeekday([day.weekday, day.date])} >
                
                <> {day.weekday} - {day.date} </>
                
                <BoxTime >
                  {day.showtimes.map(item  => (
                    <li key={item.id} onClick={ () => setAvailableSeats(item.seats)} >
                      <div onClick={ () => setTime([item.name]) }> 
                        <Link to="/assentos">
                          <Time> {item.name} </Time>
                        </Link>
                      </div>
                    </li> 
                  ))}
                </BoxTime> 

            </BoxSection>
        ))}

      </StyleSection>
      
      <a onClick={() => {window.location.href="/"}} >            
        <PreviousPage>
          <div>
            <BsFillCaretLeftFill /> 
          </div>
        </PreviousPage>
      </a>

      <Footer>
        <img src={posterURL} />  
        <> {title} </> 
      </Footer>            
    </>
  )
};

const StyleSection = styled.div ` 
  margin-top: 30%;
  margin-bottom: 10%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

    h1 {
      margin-bottom: 10%;
      font-size: 1.1rem;
      text-align: center;
    }
`;

const BoxSection = styled.ul ` 
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

const BoxTime = styled.div ` 
  display: flex;
  justify-content: flex-start;
`;

const Time = styled.div `
  width: 50px;
  height: 30px;
  background: orange;
  margin-top: 30px;
  margin-right: 30px;
  border-radius: 8%;
  display: flex;
  justify-content: center;
  align-items: center;

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

    img {
      width: 60px;
      border: 5px solid white;
      margin-right: 10px;
      margin-left: 5px;
    }
`;