import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';


export default function Sessoes() {
  
  const { clickedMovie } = useContext(MoviesContext);
  const {days, id, overview, posterURL, releaseDate, title} = clickedMovie;
  console.log(days)
 

  // {movies.map(movie  => 
  //   <StyleBox key={movie.id} onClick={ () => setClickedMovie(movie)}>
  //       <Link to="/sessoes">
  //         <img src={movie.posterURL}/> 
  //       </Link>
  //   </StyleBox>)}









    return (
        <> 
        <StyleSection>
          <h1>Selecione o Horário</h1>
          {days.map(day => (
              <ul key={day.id}>
                  <li>{day.weekday} - {day.date} </li>
                  
                  {day.showtimes.map(item  => (
                    <ul key={item.id}>
                      <li>{item.name}</li>
                    </ul> ) ) }
              </ul>
            ) 
          )}
          <li> {title} </li>
          <img src={posterURL}/>         
        </StyleSection>
            
        </>
    )
  };


  const StyleSection = styled.div ` 
    margin-top: 30%;
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1 {
      margin-bottom: 10%;
    }
   `;