import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UseLogin from '../../../Hooks/auth/useLogin';

import LoginType from '../../../compiler/types';

import styled from 'styled-components';

const LoginForm = () => {
  const navigate = useNavigate();

  const [userInputs, setUserInputs] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = userInputs;

  const handleInput = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const isInputValid = id.includes('@') && id.includes('.') && pw.length >= 8;

  const goToTodoList = () => {
    UseLogin(id, pw);
    navigate('/todolist');
    window.location.reload();
  };

  return (
    <LoginFormWrapper>
      이메일 주소 <IdInput onChange={handleInput} required />
      비밀번호 <PasswordInput onChange={handleInput} required />
      <LoginButton onClick={() => goToTodoList()} disabled={!isInputValid}>
        로그인
      </LoginButton>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  ${props => props.theme.flex.flexBox('column')};
  padding: 1.5rem 1.5rem 0 1.5rem;
  font-size: 1.5rem;
`;

const IdInput = styled.input.attrs<LoginType>(props => ({
  type: 'email',
  name: 'id',
  placeholder: '이메일 주소',
}))`
  width: 20rem;
  height: 3rem;
  margin: 0.5rem;
  padding: 0.7rem;
  font-size: 1.2rem;
`;

const PasswordInput = styled(IdInput).attrs(props => ({
  type: 'password',
  name: 'pw',
  placeholder: '비밀번호',
}))``;

const LoginButton = styled.button`
  border: none;
  margin: 1rem 0;
  width: 10rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.gray};
  }
`;

export default LoginForm;
