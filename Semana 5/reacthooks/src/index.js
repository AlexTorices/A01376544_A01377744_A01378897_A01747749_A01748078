import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { Formulario } from './hooks/effect/Formulario';
import { HookCallback } from './hooks/memo/HookCallBack';
import { Hooks } from './Hooks'; 
import { Contador } from './hooks/state/Contador';
import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHooks';
import { TodoApp } from './hooks/reducer/TodoApp';

 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<TodoApp />); 

//import ('./hooks/reducer/intro-reducer');
