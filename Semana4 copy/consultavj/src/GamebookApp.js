import React, { useState } from 'react';
import { MainAppRouter } from './routers/MainAppRouter';
import { UserContext } from './componentes/UserContext'
export const GamebookApp = () => {
    const [user, setUser] = useState({});


    return (
        <>
            <UserContext.Provider value={
                {
                    user,
                    setUser
                }
            }>
                <MainAppRouter />
            </UserContext.Provider>
        </>
    )
}