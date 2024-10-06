import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
    isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
