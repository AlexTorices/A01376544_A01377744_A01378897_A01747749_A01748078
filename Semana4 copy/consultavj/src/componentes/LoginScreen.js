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
            <form id='loginForm'>
                <label>Email</label>
                <input type='email' id='email' required>
                </input>
                <label>Password</label>
                <input type='password' id='password' required>
                </input>
                <button
                className='btn btn-primary'
                onClick={() => {
                    const email = document.getElementById('email').value
                    const password = document.getElementById('password').value

                    const dbPassword = 'lol'

                    if (password === dbPassword) {
                        setUser({
                            _id: 1,
                            nombre: 'as', 
                            correo: email
                        });
                        navigate("/Videojuegos");
                    }

                    }}>
                Login
            </button>
            </form>
        </>
    )
} 