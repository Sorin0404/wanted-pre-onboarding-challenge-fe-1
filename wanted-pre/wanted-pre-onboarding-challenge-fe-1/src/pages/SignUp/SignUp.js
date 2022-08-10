import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { API } from '../../config';

import axios from 'axios';
import styled from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();

  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
    checkpassword: '',
  });

  const { email, password, checkpassword } = userInputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const isInputValid =
    email.includes('@') &&
    email.includes('.') &&
    password.length >= 8 &&
    password === checkpassword;

  const goToLogin = e => {
    e.preventDefault();

    axios
      .post(API.signUp, {
        email: email,
        password: password,
      })
      .then(function (response) {
        alert('계정이 성공적으로 생성되었습니다');
        navigate('/login');
      })
      .catch(function (error) {});
  };

  return (
    <SignUpWrapper>
      <SignUpWindow>
        <SignUpPageInfo>Wanted pre onboarding SignUp Page</SignUpPageInfo>
        <SignUpForm>
          이메일 주소
          <EmailInput onChange={handleInput} required />
          {!(email.includes('@') && email.includes('.')) ? (
            <EmailForm>이메일에는 '@' 와 '.'이 포함되어야 합니다.</EmailForm>
          ) : null}
          비밀번호
          <PasswordInput onChange={handleInput} required />
          {password.length < 8 ? (
            <PasswordLength>비밀번호는 8자리 이상이어야 합니다.</PasswordLength>
          ) : null}
          비밀번호 확인
          <PasswordCheckInput onChange={handleInput} required />
          {password !== checkpassword ? (
            <DifferentPassword>비밀번호가 일치하지 않습니다.</DifferentPassword>
          ) : null}
          <SignUpButton onClick={goToLogin} disabled={!isInputValid}>
            회원가입 완료
          </SignUpButton>
        </SignUpForm>
      </SignUpWindow>
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.section`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
  height: 100vh;
`;

const SignUpWindow = styled.div`
  width: 40rem;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid black;
`;

const SignUpPageInfo = styled.div`
  margin: 0 0 1rem;
  font-size: ${props => props.theme.fontSizes.titleSize};
  color: ${props => props.theme.colors.blue};
`;

const SignUpForm = styled.form`
  ${props => props.theme.flex.flexBox('column')};
  font-size: 1.5rem;
  padding: 1.5rem;
`;

const EmailForm = styled.div`
  padding: 0.2rem;
  color: red;
  font-size: 1rem;
`;

const EmailInput = styled.input.attrs(props => ({
  type: 'email',
  name: 'email',
  placeholder: '이메일 주소',
}))`
  width: 20rem;
  height: 3rem;
  margin: 0.5rem;
  padding: 0.7rem;
  font-size: 1.2rem;
`;

const PasswordInput = styled(EmailInput).attrs(props => ({
  type: 'password',
  name: 'password',
  placeholder: '비밀번호',
}))``;

const PasswordLength = styled(EmailForm)``;

const PasswordCheckInput = styled(PasswordInput).attrs(props => ({
  name: 'checkpassword',
  placeholder: '비밀번호 확인',
}))``;

const DifferentPassword = styled(EmailForm)``;

const SignUpButton = styled.button`
  border: none;
  margin: 2rem 0;
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

export default SignUp;
