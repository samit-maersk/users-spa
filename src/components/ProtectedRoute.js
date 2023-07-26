import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {data, isAuthenticated, error, loading} = useSelector((state => state.auth))

    if(error) {
        <Navigate to="/login" state={{ from: location}} replace />
    }
    
    if(isAuthenticated) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location}} replace />
}

export default ProtectedRoute