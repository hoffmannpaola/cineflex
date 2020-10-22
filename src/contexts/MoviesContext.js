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
            alert("Assento indisponível!")
        }
        if(seat.isAvailable === true) {

            const isOrNot = clickedSeats.some( seatInArray => seatInArray.id === seat.id);
            
            if (isOrNot) {
                setClickedSeats([...clickedSeats.filter(seatInArray => seatInArray.id !== seat.id)]);
            } else {
                setClickedSeats([...clickedSeats, seat ]);
            }
            
        }
       
        
    }

    
    function reserveSeat () {
        const listIds = [];
        clickedSeats.map(seat => listIds.push(seat.id))
        
            
        var request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many', {"ids": listIds });
        request.then(success);
    
    }
    
    function success () {
        alert("requisiçao voltou com sucesso!")
    }
    


    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        requisicao.then(response => {
            setMovies(response.data);
            
            
            
        });
    }, []);

   

    return (
        <MoviesContext.Provider value={ {movies, setMovies, clickedMovie, setClickedMovie, availableSeats, setAvailableSeats, clickedSeats, setClickedSeats, section, setSection, selectingSeats, weekday, setWeekday, time, setTime, reserveSeat} } >
            {props.children}
        </MoviesContext.Provider>
    )
}

