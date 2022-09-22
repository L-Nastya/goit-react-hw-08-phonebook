import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./PrivatRoute/privateRoute";
import PublicRoute from "./PublicRoute/publicRoute";

import Menu from "../Menu/menu";
const MainPage = lazy(() => import("../MainPage/mainPage"));
const SignupPage = lazy(() => import("../SignupPage/signupPage"));
const LoginPage = lazy(() => import("../LoginPage/loginPage"));
const MyContactPage = lazy(() => import("../MyContactPage/myContactPge"));
const NotFoundPage = lazy(() => import("../NotFoundPage/notFoundPage"));

const AllRoutes = () => {
    return (
        <>
        <Menu />
        <Suspense>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element = {<PublicRoute/>}>
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            </Route>
          <Route element = {<PrivateRoute/>}>
            <Route path="/contacts" element={<MyContactPage/>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
        </>
    )
}
export default AllRoutes;

