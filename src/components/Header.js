import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    padding: 2rem 0;
    text-align: center;
    color: #fff;
    box-shadow:0 .1rem .6rem #fff;    
    background-color:#010F39;
    h1{
        font-family: 'Bebas Neue', cursive;
        text-transform: uppercase;
    }
`;


const Header = () =>( 
    <HeaderComponent>
        <h1>Criptomonedas react api</h1>
        <small>criptoCompare(API)</small>
    </HeaderComponent>
);
export default Header;