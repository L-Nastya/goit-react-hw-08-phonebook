import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isRegister } from "../../../redux/auth/auth-selectors";


const PublicRoute = () => {
    const isLogin = useSelector(isRegister);

    if (isLogin) {
        return <Navigate to = "/contacts" />
    } 
  return <Outlet/>
}
export default PublicRoute;