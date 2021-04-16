import "./App.css";
import React from "react";

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from "./components/basicos/Primeiro";
import ComParematro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
      <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parametro" color="#E8B71A">
      <ComParematro
        titulo="Situação do aluno"
        aluno="Davi Negreiros"
        nota={9.5}
      />
      </Card>

      <Card titulo="#01 -  Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
  
      </div>

      
    </div>
  );
}
