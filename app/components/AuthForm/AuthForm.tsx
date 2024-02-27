import React from 'react'
import styled from "styled-components"
import { SocialButtons } from './components/SocialButtons';

const Container = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 10%;
  /* padding-left: 40px;
  padding-right: 40px; */
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
    max-width: none;
    margin-top: 30px;
  }
`
;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  
  gap: 10px;
  width: 30vw;

  @media (max-width: 767px) {

  width: 327px;
  }
  // margin: auto;

`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  // margin-top: 40px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #D4D7E3; 
  border-radius: 10px; 
  background-color: #F7FBFF;
  // width: 300px;
`;

const ForgotPassword = styled.span`
  align-self: flex-end;
  cursor: pointer;
  color: #1E4AE9;
`;

const LoginButton = styled.button`
  padding: 10px;
  background-color: #484848;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;
const Divider = styled.div`
  height: 1px;
  width: 130px; 
  background-color: #D4D7E3;
`;

const OrContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  transform: rotate(90deg);

  @media (max-width: 767px) {
    transform: none;
  }
`;

export const AuthForm = () => {
  return (
    <Container>
    <FormContainer>
      <InputContainer>
        <label htmlFor="name">Email</label>
        <Input type="text" id="name" placeholder="Enter your Email" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">Password</label>
        <Input type="email" id="email" placeholder="Enter your Password" />
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </InputContainer>
      <LoginButton type="submit">Login</LoginButton>
    </FormContainer>
    <OrContainer>
        <Divider />
        <h1>Or</h1>
        <Divider />
      </OrContainer>
    <SocialButtons />
      </Container>
  )
}

