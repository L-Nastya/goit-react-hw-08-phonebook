import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getUser } from "../../redux/auth/auth-operations";
import LoginForm from "./LoginForm/loginForm";

import { getRegisterError } from "../../redux/auth/auth-selectors";



const LoginPage = () => {
    const dispatch = useDispatch();
    const {status, message} = useSelector(getRegisterError);

    const onAuth = (name,email,password) => {
        dispatch(getUser({name,email,password}));
    }

    return (
        <LoginWrapper>
            <LoginTitle>LogIn Page</LoginTitle>
            <LoginForm onSubmit={onAuth} />
            {status && <LoginMessage style={{color: "red"}}>{message}</LoginMessage>}
        </LoginWrapper>
    )
 

        
}
export default LoginPage;

const LoginWrapper = styled.div`
  height: 100vh;
  background-color:#fdfda3;
`;

const LoginTitle = styled.h2`
    font-size:30px;
    margin-top: 0px;
    margin-left:30px;
    padding-top:20px;
`;

const LoginMessage = styled.p`
 font-size:15px;
  margin-left:30px;
`;