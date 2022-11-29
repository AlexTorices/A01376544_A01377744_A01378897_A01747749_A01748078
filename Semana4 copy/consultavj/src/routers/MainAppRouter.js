 
import React from 'react'; 
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom"; 
import { LoginScreen } from '../componentes/LoginScreen'; 
import { GamesRouter } from './GamesRouter'; 
 
export const MainAppRouter = () => { 
    return ( 
 
        <Router> 
            <div> 
                <Routes> 
                    <Route exact path="/Login" element={<LoginScreen/>} /> 
                    <Route 
                        path="*" 
                        element={<GamesRouter/>} 
                    />    
                </Routes> 
            </div> 
        </Router> 
    ) 
} 
 