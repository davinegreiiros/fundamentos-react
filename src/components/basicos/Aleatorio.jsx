/* eslint-disable import/no-anonymous-default-export */
import React from "react";


export default (props) => {
 const { min, max } = props;
 const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor minimo: </strong> {min}
      </p>
      <p>
        <strong>Valor maximo: </strong> {max}
      </p>
      <p>
        <strong>Valor escolhido: </strong> {aleatorio}
      </p>
    </div>
  );
}
