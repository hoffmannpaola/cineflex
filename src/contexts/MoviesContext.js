import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


const MoviesContext = createContext();

export default MoviesContext;



export function MovieProvider(props) {
    
    const [movies, setMovies] = useState([]);
    const [clickedMovie, setClickedMovie]=useState({})
    const [availableSeats, setAvailableSeats]=useState({})

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        requisicao.then(response => {
            setMovies(response.data);
            
            
        });
    }, []);

   

    return (
        <MoviesContext.Provider value={ {movies, setMovies, clickedMovie, setClickedMovie, availableSeats, setAvailableSeats} } >
            {props.children}
        </MoviesContext.Provider>
    )
}

