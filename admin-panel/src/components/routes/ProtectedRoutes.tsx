import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';

interface ProtectedRouteProps {
    children: ReactNode;
    isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
    const token = useSelector((e: RootState) => e.auth.token)
    return token ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
