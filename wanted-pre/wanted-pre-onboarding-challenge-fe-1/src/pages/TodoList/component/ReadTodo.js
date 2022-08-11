import React from 'react';

import TodoLists from './TodoLists';

import styled from 'styled-components';

const ReadTodo = ({ todoLists, onRemove, getLists }) => {
  return (
    <ReadTodoWrapper>
      <TodoListInfo>TodoList</TodoListInfo>
      {todoLists.map((todoList, index) => (
        <TodoLists
          todoList={todoList}
          key={index}
          onRemove={onRemove}
          getLists={getLists}
        />
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
  font-weight: 800;
`;

export default ReadTodo;
