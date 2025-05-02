import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {users, loading } = useContext(AuthContext)

    if(loading){
        return <p>Loading....</p>
    }
    
    if(users){
        return children;
    };

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;