import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParematro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


ReactDOM.render(
  <div id= "app">
     <Primeiro />
     <ComParematro 
     titulo="Situação do Aluno" 
     aluno="Davi Negreiros" 
     nota={9.7} />
     <Fragmento />
  </div>, 
  document.getElementById('root')
)

