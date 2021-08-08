import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Alerta from './Alerta';
import useMoneda from '../hook/useMoneda';
import useCriptoMoneda from '../hook/useCriptoMoneda';



const Boton = styled.input`
    display: block;
    margin: 2rem auto 0 auto;
    padding: 1rem ;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
    border: .1rem solid #fff;
    border-radius: .3rem;
    text-align: center;
    background-color:#1565c0 ;
    transition: all .3s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: transparent;
    }

`;

const Formulario = ({setCriptoSeleccionada, setMonedaSeleccionada}) => {

    const [alerta, setAlerta] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];
    //usan hook de moneda
    const [moneda, Seleccionar, setMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);

    const [listaCriptoMonedas, setListaCriptoMonedas] = useState([]);
    //usar hook de criptomoneda
    const [cripto, SelectCripto] = useCriptoMoneda('Elige CriptoMoneda', '',  listaCriptoMonedas);

    useEffect(() => {
        const consultarAPI = async () => {
            const url ='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setListaCriptoMonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    const validarCampos = (e) => {
        e.preventDefault();
        if(moneda.trim() === "" || cripto.trim() === ""){
            setAlerta(true);
            return;
        }
        setAlerta(false);
        setMonedaSeleccionada(moneda);
        setCriptoSeleccionada(cripto);
    }

    return ( 
        <form 
            onSubmit={validarCampos}
        >
            {alerta ? <Alerta mensaje={'No se permiten campos sin seleccionar'} /> : null}

            <Seleccionar />
            <SelectCripto />
            <Boton  
                type="submit"
                value="Cotizar"
            />
        </form>
     );
}
 
Formulario.propTypes = {
    setCriptoSeleccionada: PropTypes.func.isRequired,
    setMonedaSeleccionada: PropTypes.func.isRequired
}
export default Formulario;