import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addUser } from "../../redux/auth/auth-operations";
import SignupForm from "./SignupForm/signupForm";



const SignupPage = () => {
    const dispatch = useDispatch();
   
    const onRegister = (name,email,password) => {
        dispatch(addUser({name,email,password}));
    }

    return (
        <RegisterWrapper>
            <RegisterTitle>Register Page</RegisterTitle>
            <SignupForm onSubmit={onRegister} />
        </RegisterWrapper>
    )
 

        
}
export default SignupPage;

const RegisterWrapper = styled.div`
  height: 100vh;
  background-color:#fdfda3;
`;

const RegisterTitle = styled.h2`
    font-size:30px;
    margin-top: 0px;
    margin-left:30px;
    padding-top:20px;
`;

