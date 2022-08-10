import React from 'react';

import TodoLists from './TodoLists';

import styled from 'styled-components';

const ReadTodo = ({ todoLists, onRemove }) => {
  return (
    <ReadTodoWrapper>
      <TodoListInfo>TodoList</TodoListInfo>
      {todoLists.map((todoList, index) => (
        <TodoLists todoList={todoList} key={index} onRemove={onRemove} />
      ))}
    </ReadTodoWrapper>
  );
};

const ReadTodoWrapper = styled.div`
  width: 30rem;
`;

const TodoListInfo = styled.div``;

export default ReadTodo;
