import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <LoginFormWrapper>
      <IdInput />
      <PasswordInput />
      <LoginButton>로그인</LoginButton>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  ${props => props.theme.flex.flexBox('column')};
`;

const IdInput = styled.input.attrs(props => ({
  type: 'email',
  placeholder: '이메일',
}))`
  width: 20rem;
  height: 3rem;
  font-size: 1.2rem;
`;

const PasswordInput = styled(IdInput).attrs(props => ({
  type: 'password',
  placeholder: '비밀번호',
}))``;

const LoginButton = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border: none;
  margin: 0.5rem;
  width: 10rem;
  height: 2rem;
`;

export default LoginForm;
