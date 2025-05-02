import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './fairbase.init';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const Googleprovider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
    const FaceBookprovider = new FacebookAuthProvider();

    //Create Users
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login User And Password
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, Googleprovider)
        .then((result) => {
            console.log(result.user)
            setUsers(result.user)
            setLoading(true)
           
        })
    };

   // GitHub Login
    const handleGitHubLogin = () => {
        signInWithPopup(auth, GitHubProvider)
        .then((result) => {
            console.log(result.user);
            setUsers(result.user)
            setLoading(true)
            
        })
    };

    // FaceBook LogIn
    const handleFaceBookLogin = () => {
        signInWithPopup(auth, FaceBookprovider)
        .then((result) => {
            console.log(result.user)
            setUsers(result.user)
            setLoading(true)
      
        })
    }


    // LogOut Users
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current Users", currentUser)
            setUsers(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        users,
        loading,
        createUser,
        logInUser,
        handleGoogleLogin,
        handleGitHubLogin,
        handleFaceBookLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;