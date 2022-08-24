import React from 'react'; 
import ReactDOM from 'react-dom'; 
import VideojuegosApp from './VideojuegosApp'; 
import './index.css'; 
import ListaVideojuegosApp from './ListaVideojuegosApp';
 
const divRoot = document.querySelector('#root'); 
 
//Utilizamos un prop 'nombre' para enviar información al componente 
// VideojuegosApp 
ReactDOM.render(<ListaVideojuegosApp nombre='Jorge' />, divRoot); 