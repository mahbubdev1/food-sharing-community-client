import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>
    }
    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;