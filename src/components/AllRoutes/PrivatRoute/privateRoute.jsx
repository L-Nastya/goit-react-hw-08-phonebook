import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isRegister } from "../../../redux/auth/auth-selectors";

const PrivateRoute = () => {
    const isLogin = useSelector(isRegister);

    if (!isLogin) {
        return <Navigate to = "/login" />
    }
  return <Outlet/>
}
export default PrivateRoute;