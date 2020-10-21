import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MoviesContext from '../contexts/MoviesContext';


export default function Assentos() {
  const { availableSeats } = useContext(MoviesContext);
  console.log(availableSeats);
  
    return (
      <main>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        <h1>Assentos</h1>
        
      </main>
    )
  }