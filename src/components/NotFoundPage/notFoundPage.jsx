import { Link } from 'react-router-dom';
import styled from "styled-components";

const NotFoundPage = () => {
    return (
        <NotPageWrapper>
            <NotPageTitle>Page not found</NotPageTitle>
            <NotPageLink to="/">To Homepage</NotPageLink>
        </NotPageWrapper>
    )
}

export default NotFoundPage;

const NotPageWrapper = styled.div`
position: relative;
background-color:  #fdfda3;
height: 100vh;
margin-bottom:auto;
`;

const NotPageTitle = styled.p`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
font-size: 50px;
`;

const NotPageLink = styled(Link)`
position:absolute;
top: 65%;
left:50%;
transform:translate(-50%, -50%);
font-size: 25px;
:hover{
        color: #02a639 ;
    }
`;