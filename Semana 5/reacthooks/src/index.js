import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { Formulario } from './hooks/effect/Formulario';
//import { Hooks } from './Hooks'; 
//import { Contador } from './hooks/state/Contador';
//import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHooks';
 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<Formulario />); 
