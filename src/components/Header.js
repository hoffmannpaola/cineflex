import * as React from 'react';
import styled from 'styled-components';

export default function Header() {
	return (
        <StyleHeader>
            <span> CINEFLEX </span>
        </StyleHeader>
	);
}

const StyleHeader = styled.div ` 
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #C3CFD9;

        span {
            color: #E68641;
            font-family: "Roboto", sans-serif;
            font-size: 2rem;
            font-weight: 400;

        }
`;