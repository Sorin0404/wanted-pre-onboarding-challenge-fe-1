import React from 'react';

import { UseDeleteTodoLists } from '../../../Hooks/todo/useDeleteTodoLists';

import styled from 'styled-components';

import { RiDeleteBin6Line } from 'react-icons/ri';

const DeleteTodoList = ({
  id,
  setIsToggled,
}: {
  id: string;
  setIsToggled: Function;
}) => {
  const deleteTodoList = () => {
    UseDeleteTodoLists(id);
  };

  return (
    <DeleteTodoListWrapper
      onClick={() => {
        deleteTodoList();
        setIsToggled(true);
      }}
    >
      <RiDeleteBin6Line />
    </DeleteTodoListWrapper>
  );
};

const DeleteTodoListWrapper = styled.div`
  cursor: pointer;
`;

export default DeleteTodoList;
