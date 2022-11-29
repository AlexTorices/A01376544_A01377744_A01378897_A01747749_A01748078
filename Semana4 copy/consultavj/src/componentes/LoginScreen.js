import React, { useContext } from 'react';
import { UserContext } from './UserContext'

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "Usuario"

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    return (
        <>
            <h1>Login</h1>
            <hr />
            <form>
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

                    if (password == dbPassword) {

                    }

                    }}>
                Login
            </button>
            </form>
        </>
    )
} 