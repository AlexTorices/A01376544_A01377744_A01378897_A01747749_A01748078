 
import React from 'react'; 
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React. 
import { Link, NavLink } from 'react-router-dom'; 
 
export const Navbar = () => { 
    return( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark"> 
            <Link className="navbar-brand" 
                  to="/Videojuegos" 
            > 
                Videojuegos 
            </Link> 
 
            <div className="navbar-collapse"> 
                <div className="navbar-nav"> 
                    {/*                         
                        La  propiedad  'to' sirve  para  indicar  el  route  al  que  nos vamos  a  dirigir  al  hacer clic  en  la  liga  y con  esto 
identifica qué componente 
                        va cargar para ser mostrado en la página. La propiedad 'exact' indica que debe ser la ruta exacta la que se 
tiene que indicar y enviar al Router. 
                    */} 
 
 
                    <NavLink 
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"} 
                        exact="true" 
                        to="/Coleccion" 
                    > 
                        Mi Colección 
                    </NavLink> 
 

                    <NavLink 
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"} 
                        exact="true" 
                        to="/Login" 
                    > 
                        Salir 
                    </NavLink> 
                </div> 
            </div> 
        </nav> 
    ) 
} 