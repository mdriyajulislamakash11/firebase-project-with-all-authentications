import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './fairbase.init';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)

    //Create Users
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current Users", currentUser)
            setUsers(currentUser)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        users,
        createUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;