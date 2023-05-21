import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log(location)
    if(loading){
        return <h2>Looooooading</h2>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace/>
};

export default PrivateRoutes;