import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';


export default function Main() {
    const { movies, setClickedMovie } = useContext(MoviesContext);
   

    
  
    return (
      <StyleMain> 
        <h1>Selecione o filme</h1>
        <ul>
          {movies.map(movie  => 
            <StyleBox key={movie.id} onClick={ () => setClickedMovie(movie)}>
                <Link to="/sessoes">
                  <img src={movie.posterURL}/> 
                </Link>
            </StyleBox>)}
        </ul>
      </StyleMain>
    );
}

  const StyleMain = styled.div ` 
    margin-top: 15%;
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

    h1 {
        margin-top: 50px;
        font-size: 1.3rem;
        margin-bottom: 15px;
        

    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
    }
`;

const StyleBox = styled.li ` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
   

    img {
        width: 150px;
        margin-top: 10px;
        border-radius: 10%;
    }
    
`;