import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParematro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ => 
    
      <div id="app">
        <h1>Fundamentos React ARROW </h1>
        <Fragmento />
        <ComParematro 
          titulo="Situação do aluno"
          aluno="Davi Negreiros"
          nota={9.5}
        />
        <Primeiro/>
      </div>
    
    
