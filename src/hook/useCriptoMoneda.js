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
    margin: 0 auto;
    padding: .5rem 2rem;
    text-align: center;
    border: .1rem solid #fff;
    border-radius: .3rem;
    /* background-color:transparent; */
    -webkit-appearance:none;
`;



const useCriptoMoneda = (titulo, stateInicial ,listaCriptoMonedas) => {
    
    const [cripto, setCripto] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <LabelComponent>{titulo}:</LabelComponent>
            <SelectComponent
                onChange={e => setCripto(e.target.value)}
                value={cripto}
            >
                <option>--{titulo}--</option>
                {listaCriptoMonedas.map(cm => (
                    <option value={cm.CoinInfo.Name} key={cm.CoinInfo.id}>{cm.CoinInfo.Name} : {cm.CoinInfo.FullName}</option>
                ))}
                
            </SelectComponent>
        </Fragment>
    );
    return [cripto, SelectCripto];
}

useCriptoMoneda.propTypes = {
    titulo: PropTypes.string.isRequired,
    stateInicial: PropTypes.string.isRequired,
    listaCriptoMonedas: PropTypes.array.isRequired
}
export default useCriptoMoneda;