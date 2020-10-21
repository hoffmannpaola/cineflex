import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext'
import Movies from '../components/Movies'

export default function Main() {
    const { movies } = useContext(UserContext);
   
  
    return (
      <StyleMain> 
        <h1>Selecione o filme</h1>
        <ul>
            {movies.map(movie  => <Movies movie={movie} key={movie.id} />)}
        </ul>
       
        
      </StyleMain>
    )
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
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        margin-bottom: 15px;
        

    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
    }
`;