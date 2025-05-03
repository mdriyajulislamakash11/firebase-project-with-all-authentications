import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {users, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p>Loading....</p>
    }
    
    if(users){
        return children;
    };

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;