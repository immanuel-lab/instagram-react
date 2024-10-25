import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import WelcomeLayout from './WelcomeLayout';

const AuthLayout= () => {
    const { user } = useAuth();


    return <>
     {
     user ? <Outlet/> :

      
<Navigate to ="/login"/>
    
}
    </>;  
};

export default AuthLayout;




