import React from "react";

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from "./components/basicos/Primeiro";
import ComParematro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio min={1} max={60}/>
      <Fragmento />
      <ComParematro
        titulo="Situação do aluno"
        aluno="Davi Negreiros"
        nota={9.5}
      />
      <Primeiro />
    </div>
  );
}
