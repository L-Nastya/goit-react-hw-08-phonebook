import styled from "styled-components";

const MainPage = () => {
    return (
        <MainWrapper>
            <MainTitle>SAVE YOUR CONTACTS HERE</MainTitle>
        </MainWrapper>
    )
}
export default MainPage;

const MainWrapper = styled.div`
position: relative;
background-color:  #fdfda3;
height: 100vh;
margin-bottom:auto;
`;

const MainTitle = styled.p`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
font-size: 50px;
`;