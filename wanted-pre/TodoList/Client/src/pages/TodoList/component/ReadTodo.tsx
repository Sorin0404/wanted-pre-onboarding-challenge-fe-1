import React from 'react';

import UpdateTodoList from './UpdateTodoList';
import { UseGetTodoLists } from '../../../Hooks/todo/useGetTodoLists';
import TodoListType from '../../../compiler/types';

import styled from 'styled-components';

const ReadTodo = () => {
  const getTodoLists = UseGetTodoLists();

  return (
    <ReadTodoWrapper>
      <TodoListInfo>TodoList</TodoListInfo>
      {getTodoLists.map((todoList: TodoListType, index: number) => (
        <UpdateTodoList todoList={todoList} key={index} />
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
