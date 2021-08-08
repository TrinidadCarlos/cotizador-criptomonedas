import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const CotizadoComponent = styled.div`
    width: 80%;
    margin: 1.5rem auto 0 auto;
    padding: .7rem;
        font-weight: bold;
        color: #010F39;
    border:.5rem inset #010F39;
    border-radius:.3rem;
    background-color: #1565c0 ;
    h3{
        text-align: center;
        text-transform: uppercase;
        color:#fff;
        &::after {
            content: "";
            display: block;
            margin: 0.2rem auto;
            width: 20%;
            height: 0.2rem;
            border-radius: 0.3rem;
            background-color: #010F39;
        }
        span{
            font-size: .8rem;
            font-weight: normal;
            color: #010F39;
            border-radius:  .2rem;
        }
    }
    span{
        font-size: 1.2rem;
        font-weight: normal;
        color: #fff ;
    }
`;

const PreciosRelevantes = styled.p`
    padding: .4rem;
    border:.1rem solid #fff;
    border-radius: .3rem;

`;

const MostrarCotizacion = ({ cotizado }) => {
  if (Object.values(cotizado).length === 0) return null;

  return (
    <CotizadoComponent>
      <h3>cotización <span>({cotizado.FROMSYMBOL} a {cotizado.TOSYMBOL})</span></h3>

      <p>
        Última actualización: <span>{cotizado.LASTUPDATE}</span>
      </p>
      <PreciosRelevantes>
        Última tienda: <span>{cotizado.LASTMARKET}</span>
      </PreciosRelevantes>
      <PreciosRelevantes>
        Precio: <span>{cotizado.PRICE}</span>
      </PreciosRelevantes>
      <p>
        Variación últimas 24 hrs: <span>{cotizado.CHANGEPCT24HOUR}%</span>
      </p>
      <p>
        Abrió el día: <span>{cotizado.OPENDAY}</span>
      </p>
      <p>
        Abrió la hora: <span>{cotizado.OPENHOUR}</span>
      </p>
      <p>
        Más alto del día: <span>{cotizado.HIGHDAY}</span>
      </p>
      <p>
        Más bajo del día: <span>{cotizado.LOWDAY}</span>
      </p>
      <p>
        Más bajo de la hora: <span>{cotizado.LOWHOUR}</span>
      </p>
      <p>
        Más alto últimas 24 hrs: <span>{cotizado.HIGH24HOUR}</span>
      </p>
      <p>
        Más bajo últimas 24 hrs: <span>{cotizado.LOW24HOUR}</span>
      </p>
    </CotizadoComponent>
  );
};

MostrarCotizacion.propTypes = {
    cotizado: PropTypes.object.isRequired
}
export default MostrarCotizacion;
