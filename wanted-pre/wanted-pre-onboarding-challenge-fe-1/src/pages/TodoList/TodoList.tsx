import React from 'react';

import CreateTodo from './component/CreateTodo';
import ReadTodo from './component/ReadTodo';

import styled from 'styled-components';

const TodoList = () => {
  return (
    <TodoListWrapper>
      <CreateTodo />
      <ReadTodo />
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
`;

export default TodoList;
