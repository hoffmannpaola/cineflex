import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        requisicao.then(response => {
            setMovies(response.data);
            
            
        });
    }, []);

   

    return (
        <UserContext.Provider value={{movies}} >
            {props.children}
        </UserContext.Provider>
    )
}

