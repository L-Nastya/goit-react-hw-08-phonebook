import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isRegister } from "../../redux/auth/auth-selectors";
import AuthMenu from "./AuthMenu/authMenu";
import UserMenu from "./UserMenu/userMenu";
import ContactMenu from "./ContactMenu/contactMenu";
import styled from "styled-components";
import { RiContactsBookFill } from 'react-icons/ri'

const Menu = () => {
    const isLogin = useSelector(isRegister);
    
    return (
        <MenuContainer >
            <Logo to="/"><RiContactsBookFill size={20}/>PhoneBook</Logo>
            {isLogin && <ContactMenu />}
            {isLogin ? <UserMenu /> : <AuthMenu />} 
        </MenuContainer>
    )
    
}
export default Menu;

const MenuContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: black;
`;

const Logo = styled(Link)`
text-decoration: none;
margin-left: 20px;
font-size: 25px;
color: #fdfda3;
`;