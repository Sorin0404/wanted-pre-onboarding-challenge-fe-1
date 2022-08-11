import React, { useEffect, useState } from 'react';

import CreateTodo from './component/CreateTodo';
import ReadTodo from './component/ReadTodo';

import styled from 'styled-components';
import axios from 'axios';

import { API } from '../../config';

const TodoList = () => {
  const [todoLists, setTodoLists] = useState([]);

  const getLists = async () => {
    try {
      const response = await axios.get(API.getTodos, {
        headers: {
          Authorization: 'token',
        },
      });
      setTodoLists(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  const onRemove = async id => {
    try {
      const response = await axios.delete(`${API.deleteTodo}/${id}`, {
        headers: {
          Authorization: 'token',
        },
      });
      localStorage.getItem('token');
      if (response.status === 200) {
        alert(`삭제되었습니다.`);
      }
    } catch (error) {}
    getLists();
  };

  return (
    <TodoListWrapper>
      <CreateTodo />
      <ReadTodo todoLists={todoLists} onRemove={onRemove} getLists={getLists} />
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
`;

export default TodoList;
