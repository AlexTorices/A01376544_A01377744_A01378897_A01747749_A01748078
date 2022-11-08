
import React, { useContext } from 'react';
import { UserContext } from '../UserContext'
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React. 
import { json, Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user);

    const handleLogOut = () => {
        setUser({});
        console.log(user);
    }
    return (
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
                    <pre>
                        {JSON.stringify(user, null, 3)}
                    </pre>


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
                        handleLogOut
                    >
                        Salir
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/buscar"
                    >
                        Buscar
                    </NavLink>
                    ...
                </div>
            </div>
        </nav>
    )
} 