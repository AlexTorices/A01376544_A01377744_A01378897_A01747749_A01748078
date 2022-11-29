 
import React from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Navbar } from '../componentes/comunes/Navbar'; 
import { VideojuegosApp } from '../VideojuegosApp';
import { GameCollectionApp } from '../componentes/GameCollectionApp';
import { LoginScreen } from '../componentes/LoginScreen'; 
import { BuscadorScreen } from '../componentes/buscador/BuscadorScreen'; 

 
export const GamesRouter = () => { 
    return ( 
        <> 
            <Navbar /> 
 
            <div> 
                <Routes> 
                    <Route exact path="/Videojuegos" element={<VideojuegosApp/>} />
                    <Route exact path="/Coleccion" element={<GameCollectionApp/>} />   
                    <Route exact path="/Login" element={<LoginScreen/>} />
                    <Route exact path="/buscar" element={<BuscadorScreen/>} />                                                                                                                                                                  
                    <Route 
                        path="*" 
                        element={<Navigate to="/Login" replace />} 
                    /> 
                </Routes> 
            </div> 
        </> 
    ) 
} 