import React, { useEffect, useState } from 'react';

import UpdateTodoList from './UpdateTodoList';
import { API } from '../../../config';

import styled from 'styled-components';
import axios from 'axios';

const ReadTodo = () => {
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

  return (
    <ReadTodoWrapper>
      <TodoListInfo>TodoList</TodoListInfo>
      {todoLists.map((todoList, index) => (
        <UpdateTodoList todoList={todoList} key={index} getLists={getLists} />
      ))}
    </ReadTodoWrapper>
  );
};

const ReadTodoWrapper = styled.div`
  width: 30rem;
  border-top: 1px solid black;
  margin: 0.8rem 0 0 0;
  padding: 1.5rem 0 0 0;
`;

const TodoListInfo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ReadTodo;
