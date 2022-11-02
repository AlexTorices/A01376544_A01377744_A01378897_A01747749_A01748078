import React, { useContext } from 'react';
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate = useNavigate();


    const { setUser } = useContext(UserContext);

    return (
        <>
            <h1>Login</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => {
                    setUser(
                        {
                            id: 123,
                            name: 'equipo',
                            email: 'algo@tec.mx'
                        }

                    ),
                    navigate("/Videojuegos");
                }
                }
            >
                Login
            </button>
        </>
    )
} 