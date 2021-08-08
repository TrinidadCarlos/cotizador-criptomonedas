import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const LabelComponent = styled.label`
    display: block;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    margin: 1rem 0;
`;

const SelectComponent = styled.select`
    display: block;
    width: 80%;
    margin: 0 auto 3rem auto;
    padding: .5rem 2rem;
    text-align: center;
    border: .1rem solid #fff;
    border-radius: .3rem;
    -webkit-appearance:none;
`;


const useMoneda = (label, setInicial, MONEDAS) => {
    //estate del custom
    const [moneda, setMoneda] = useState(setInicial)

    const Seleccionar = () => (
        <Fragment>
            <LabelComponent>{label} :</LabelComponent>
            <SelectComponent
                onChange={(e) => setMoneda(e.target.value) }
                value={moneda}
            >
                <option value="" selected disabled>--Elige tipo de Moneda--</option>
                {MONEDAS.map( m => (
                    <option value={m.codigo} key={m.codigo}>{m.nombre}</option>
                ))}
            </SelectComponent>
        </Fragment>
    );

    //retorna: state, interfaz, fn que modifica El state
    return [moneda, Seleccionar, setMoneda];
    
}

useMoneda.PropTypes = {
    label: PropTypes.string.isRequired,
    setInicial: PropTypes.string.isRequired,
    MONEDAS: PropTypes.array.isRequired
}
export default useMoneda;