import axios from 'axios';
import React from 'react';

import { API } from '../../../config';

import styled from 'styled-components';

import { RiDeleteBin6Line } from 'react-icons/ri';

const DeleteTodoList = ({
  id,
  getLists,
}: {
  id: string;
  getLists: Function;
}) => {
  const deleteTodoList = async (id: string) => {
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
    } catch (error) {
      alert('에러가 발생되었습니다.');
    }
    getLists();
  };

  return (
    <DeleteTodoListWrapper onClick={() => deleteTodoList(id)}>
      <RiDeleteBin6Line />
    </DeleteTodoListWrapper>
  );
};

const DeleteTodoListWrapper = styled.div`
  cursor: pointer;
`;

export default DeleteTodoList;
