import React from 'react';
import { Spinner } from 'react-bootstrap';
import {  Navigate,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase'

const AdminRoute = ({children, ...rest}) => {
    const location = useLocation()
    const {user, admin, isLoading} = useAuth()
    console.log(user.email, admin)
    if(!admin ) { return <Spinner  animation="border" />}

    if(user.email && admin){
        return children;
    }
    else{
        return <Navigate to="/" state={{ from: location }} />;
    }
    
    
};

export default AdminRoute;