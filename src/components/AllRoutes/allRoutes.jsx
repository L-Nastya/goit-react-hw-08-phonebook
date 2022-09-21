import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivatRoute/privateRoute";
import PublicRoute from "./PublicRoute/publicRoute";

import Menu from "../Menu/menu";
import MainPage from "components/MainPage/mainPage";
import SignupPage from "../SignupPage/signupPage";
import LoginPage from "../LoginPage/loginPage";
import MyContactPage from "../MyContactPage/myContactPge";

const AllRoutes = () => {
    return (
        <>
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element = {<PublicRoute/>}>
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element = {<PrivateRoute/>}>
            <Route path="/contacts" element={<MyContactPage/>} />
          </Route>
        </Routes>
        </>
    )
}
export default AllRoutes;

