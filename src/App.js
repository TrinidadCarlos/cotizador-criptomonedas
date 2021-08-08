import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import image from "./cryptomonedas.png";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import MostrarCotizacion from './components/MostrarCotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 85rem;
  margin: 2rem auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
`;

const HeadingForm = styled.div`
  width: 100%;
  font-size: 3rem;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  color: #fff;

  &::after {
    content: "";
    display: block;
    width: 20%;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: #2a57fa;
  }
`;

function App() {


  const [monedaSeleccionada, setMonedaSeleccionada] = useState('');
  const [criptoSeleccionada, setCriptoSeleccionada] = useState('');
  const [cotizado, setCotizado] = useState({});
 const [spinner, setSpinner] = useState(false);

  useEffect( () => {
    const cotizarCripto = async () => {
      if(monedaSeleccionada === '') return
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoSeleccionada}&tsyms=${monedaSeleccionada}`;
      setSpinner(true);
      const resultado = await axios.get(url);
      setCotizado(resultado.data.DISPLAY[criptoSeleccionada][monedaSeleccionada]);
      setSpinner(false);
    }
    cotizarCripto();

  },[monedaSeleccionada, criptoSeleccionada]);

  return (
    <Fragment>
      <Header />
      <Contenedor>
        <div>
          <Imagen src={image} alt="Imagen criptomonedas" />
        </div>
        <div>
          <HeadingForm>Cotiza criptomonedas de manera sencilla</HeadingForm>
          <Formulario setCriptoSeleccionada={setCriptoSeleccionada} setMonedaSeleccionada={setMonedaSeleccionada}/>

          {spinner ? <Spinner/> : <MostrarCotizacion cotizado={cotizado}/> }
          
          
        </div>
      </Contenedor>
    </Fragment>
  );
}

export default App;
