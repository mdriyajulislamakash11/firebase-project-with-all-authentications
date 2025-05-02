import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './fairbase.init';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const Googleprovider = new GoogleAuthProvider();

    //Create Users
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login User And Password
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // GoogleLogin
    const handleGoogleLogin = () => {
        signInWithPopup(auth, Googleprovider)
        .then((result) => {
            console.log(result.user)
            setUsers(result.user)
        })
    }

    // LogOut Users
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
        logInUser,
        handleGoogleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;