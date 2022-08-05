import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <LoginWrapper>
      <LoginWindow>
        <LoginPageInfo>Wanted pre onboarding Login Page</LoginPageInfo>
        <LoginForm />
        <SignUpButton onClick={goToSignUp}>회원가입</SignUpButton>
      </LoginWindow>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
  height: 100vh;
`;

const LoginWindow = styled.div`
  width: 40rem;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid black;
`;

const LoginPageInfo = styled.div`
  margin: 0 0 1rem;
  font-size: ${props => props.theme.fontSizes.titleSize};
  color: ${props => props.theme.colors.blue};
`;

const SignUpButton = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border: none;
  margin: 0.5rem;
  width: 10rem;
  height: 2rem;
`;

export default Login;