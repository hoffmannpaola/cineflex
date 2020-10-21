import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';




export default function Movies(props) {
  
    const { movie } = props;
    const { days, id, overview, posterURL, releaseDate, title } = movie;

    return (
        <>  
            <StyleBox>
                <Link to={`/sessoes`}> 
                     <img src={posterURL}/>    
                </Link>
            </StyleBox>
            
        </>
    );
}

const StyleBox = styled.li ` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
   

    img {
        width: 140px;
        margin-top: 10px;
    }
    
`;