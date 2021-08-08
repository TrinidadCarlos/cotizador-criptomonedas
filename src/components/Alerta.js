import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertaComponent = styled.p`
    width: 90%;
    margin: 2rem auto;
    padding:.7rem 0;
    text-align: center;
    font-weight: bold;
    color: #fff;
    border-radius:.3rem;
    background-color:#b71c1c;
`;

const Alerta = ({mensaje}) => (  
        <AlertaComponent> {mensaje} </AlertaComponent>
);
 
Alerta.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Alerta;