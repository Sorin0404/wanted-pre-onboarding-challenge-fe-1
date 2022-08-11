import React, { useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import { API } from '../../../config';

const CreateTodo = () => {
  const [todoList, setTodolist] = useState({
    title: '',
    content: '',
  });

  const { title, content } = todoList;

  const handleInput = e => {
    const { name, value } = e.target;
    setTodolist({
      ...todoList,
      [name]: value,
    });
  };

  const createTodoList = () => {
    axios
      .post(
        API.createTodo,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'token',
          },
        }
      )
      .then(function (response) {
        localStorage.getItem('token');
        alert('게시글이 등록되었습니다.');
      })
      .catch(function (error) {
        alert('에러가 발생했습니다.');
      });
    setTodolist('');
  };

  return (
    <CreateTodoWrapper>
      <InputInfo>TodoList 내용을 입력해주세요.</InputInfo>
      <TodoListForm onSubmit={createTodoList}>
        <TitleInput onChange={handleInput} required />
        <ContentsTextarea onChange={handleInput} required />
        <PostButton>게시</PostButton>
      </TodoListForm>
    </CreateTodoWrapper>
  );
};

const CreateTodoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
`;

const InputInfo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListForm = styled.form`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
`;

const TitleInput = styled.input.attrs(props => ({
  placeholder: '제목',
  name: 'title',
}))`
  width: 30rem;
  margin: 0.5rem;
  font-size: 1rem;
`;

const ContentsTextarea = styled.textarea.attrs(props => ({
  placeholder: '내용을 입력해주세요.',
  name: 'content',
}))`
  ${props => props.theme.flex.flexBox('', 'start')};
  width: 30rem;
  height: 5rem;
  font-size: 1rem;
`;

const PostButton = styled.button`
  border: none;
  margin: 1rem 0;
  width: 5rem;
  height: 2rem;
  font-size: 0.9rem;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export default CreateTodo;
