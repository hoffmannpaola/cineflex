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
    const [weekday, setWeekday]=useState([])
    const [time, setTime]=useState([])
   
    

    function selectingSeats (seat){
        // console.log(seat)
        if(seat.isAvailable === false) {
            alert("Assento não disponível!")
        }
        if(seat.isAvailable === true) {
            //mudar cor da bolinha e renderizar na tela

            const isOrNot = clickedSeats.some( seatInArray => seatInArray.id === seat.id);
            
            if (isOrNot) {
                setClickedSeats([...clickedSeats.filter(seatInArray => seatInArray.id !== seat.id)]);
            } else {
                setClickedSeats([...clickedSeats, seat ]);
            }
            
        }
        //se esta na lista de assentos selecionados
        // fica verde
        
        
    }
    

    



    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        requisicao.then(response => {
            setMovies(response.data);
            
            
            
        });
    }, []);

   

    return (
        <MoviesContext.Provider value={ {movies, setMovies, clickedMovie, setClickedMovie, availableSeats, setAvailableSeats, clickedSeats, setClickedSeats, section, setSection, selectingSeats, weekday, setWeekday, time, setTime} } >
            {props.children}
        </MoviesContext.Provider>
    )
}

