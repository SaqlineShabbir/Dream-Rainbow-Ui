import React from 'react';
import { Spinner } from 'react-bootstrap';
import {  Navigate , useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} =useFirebase()
    const location = useLocation()
    if(isLoading) { return <Spinner  animation="border" />}
    
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} />;
};

export default PrivateRoute;