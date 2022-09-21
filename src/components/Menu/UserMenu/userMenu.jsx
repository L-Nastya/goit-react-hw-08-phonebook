import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getUser} from "../../../redux/auth/auth-selectors";
import { logout } from "../../../redux/auth/auth-operations";



const UserMenu = () => {
    const {email} = useSelector(getUser);

    const dispatch = useDispatch();
    const onLogout = ()=> dispatch(logout())
    return (
        <UserWrapper>
             <UserEmail>{email}</UserEmail> 
            <LogoutBtn onClick={onLogout} type="button">Logout</LogoutBtn>
        </UserWrapper>
    )
}
export default UserMenu;

const UserWrapper = styled.span`
display:flex
`;

const UserEmail = styled.span`
border-right: 1px solid white;
padding-right:10px;
font-size: 20px;
color: white;  
`;

const LogoutBtn = styled.button`
    border: none;
    width: 100px;
    margin-left: 10px;
    border-radius: 5px;
    font-size: 20px;
    background-color: white;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
     &:hover{
    background-color: #e94e65;
 }
`;