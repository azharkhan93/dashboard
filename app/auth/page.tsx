"use client"
import styled from 'styled-components';
import {  AuthForm } from '../components/AuthForm';
import {  StyledContainer, } from '../components/CustomConatiner';
import { Box } from '../components/styled/Box.styled';


 const DashboardContainer = styled(Box)`
  
  @media (max-width: 767px) {
    height: 1000%;
  }
`;
const LargerContainer = styled(Box)`

margin: 6px auto;


@media (max-width: 767px) {
  height: 800px;
}
`;

const PageHeading = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* border: 2px solid red;  */
  gap: 20px;

  h1 {
    font-size: 28px;

  }

  p {
    font-size: 20px;
    max-width: 400px; 
    margin: 0 auto; 
    /* border: 1px solid red;  */

    @media (max-width: 767px) {
      font-size: 18px;
      max-width: 355px;
    }
}
`;

const BottomContent = styled.div`
margin-top: 40px;

  text-align: center;
`;

const BottomHeading = styled.h2`
  margin-bottom: 5px;
  color: #000000 ;
`;

const BottomParagraph = styled.p`
  overflow: hidden;
  color: #122B31; 
`;

const page = () => {
  return (
    <DashboardContainer
      height="100vh"
      justifyContent="center"
      alignItems="center"
      background="#000000"
      position="relative"
      overflow="hidden"
    >
      <LargerContainer
      display= "flex"
      height="98vh"
      width= "99vw"
      justifyContent="center"
      alignItems="center"
      background="white"
      // overflow="hidden"
      borderRadius= "20px"
      >
    
      <StyledContainer
      width= "96vw"
      height= "95vh"
      overflow= "hidden"
      background = "#E6E6E6"
      borderRadius = "10px">
      <PageHeading>
      <h1>Welcome Back 👋</h1>
      <p>
        Today is a new day. It's your day. You shape it.
        Sign in to start managing your projects.
      </p>
    </PageHeading>
    <AuthForm/>
      <BottomContent>
        <BottomHeading>Don't you have an account?</BottomHeading>
        <BottomParagraph>
        Sign up
        </BottomParagraph>
      </BottomContent>
      
    </StyledContainer>
    </LargerContainer>

      
      </DashboardContainer>
  )
}

export default page;
