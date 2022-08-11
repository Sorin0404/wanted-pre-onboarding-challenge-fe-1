import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  const signOut = () => {
    const isSignIn = localStorage.getItem('token');
    if (isSignIn) {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다.');
      navigate('/');
    }
  };

  return (
    <NavWrapper>
      <MainButton
        onClick={() => {
          navigate('/');
        }}
      >
        메인페이지
      </MainButton>
      <TodoListButton
        onClick={() => {
          navigate('/todolist');
        }}
      >
        TodoList 페이지
      </TodoListButton>
      {localStorage.getItem('token') ? (
        <LogoutButton onClick={localStorage.getItem('token') ? signOut : null}>
          로그아웃
        </LogoutButton>
      ) : (
        <LoginButton
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </LoginButton>
      )}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  ${props => props.theme.flex.flexBox()};
`;
const LogoutButton = styled.button`
  border: none;
  margin: 0.7rem 0;
  width: 10rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

const MainButton = styled(LogoutButton)``;

const TodoListButton = styled(LogoutButton)``;

const LoginButton = styled(LogoutButton)``;

export default Nav;
