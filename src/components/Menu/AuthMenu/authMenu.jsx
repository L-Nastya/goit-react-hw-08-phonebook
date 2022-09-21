import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthMenu = () => {
    
    return (
    <AuthList>
        <li><AuthRegister to="/register">SignUp</AuthRegister></li> 
        <li><AuthLogin to="/login">LogIn</AuthLogin></li>
    </AuthList>
    )
    
}
export default AuthMenu;

const AuthList = styled.ul`
list-style: none;
display: flex;
margin-right: 20px;
`;

const AuthRegister = styled(NavLink)`
text-decoration: none;
border-right: 1px solid white;
padding-right:10px;
font-size: 25px;
    color: white;
    &.active{
        color: #02a639;
    }
`;
const AuthLogin = styled(NavLink)`
text-decoration: none;
margin-left: 10px;
font-size: 25px;
    color: white;
    &.active{
        color: #02a639 ;
    }
`;

