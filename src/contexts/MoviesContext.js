import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


const MoviesContext = createContext();

export default MoviesContext;



export function MovieProvider(props) {
    
    const [movies, setMovies] = useState([]);
    const [clickedMovie, setClickedMovie]=useState({})
    const [availableSeats, setAvailableSeats]=useState({})
    const [clickedSeats, setClickedSeats]=useState([])
    const [section, setSection]=useState([])

    function saveInfo( day ) {
        setSection([...section, item.name]);
        console.log(day);

    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        requisicao.then(response => {
            setMovies(response.data);
            
            
        });
    }, []);

   

    return (
        <MoviesContext.Provider value={ {movies, setMovies, clickedMovie, setClickedMovie, availableSeats, setAvailableSeats, clickedSeats, setClickedSeats, section, setSection, saveInfo} } >
            {props.children}
        </MoviesContext.Provider>
    )
}

