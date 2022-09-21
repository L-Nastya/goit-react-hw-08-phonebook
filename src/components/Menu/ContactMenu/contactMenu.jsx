import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ContactMenu = () => {
    
    return (
        <ContactList>
           <li><ContactLink to="/contacts">My Contacts</ContactLink></li>
        </ContactList>
    )
    
}
export default ContactMenu;

const ContactList = styled.ul`
    list-style: none;
`;
const ContactLink = styled(NavLink)`
text-decoration: none;
font-size: 25px;
    color: white;
    &.active{
        color: #e94e65 ;
    }
`;