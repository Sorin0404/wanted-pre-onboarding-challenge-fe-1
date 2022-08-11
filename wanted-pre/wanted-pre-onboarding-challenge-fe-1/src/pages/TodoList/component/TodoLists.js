import React, { useState } from 'react';
import styled from 'styled-components';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { API } from '../../../config';
import axios from 'axios';

const TodoLists = ({ todoList, onRemove, getLists }) => {
  const { id, title, content } = todoList;

  const [updateTodoList, setUpdateTodolist] = useState({
    updateTitle: title,
    updateContent: content,
  });

  const { updateTitle, updateContent } = updateTodoList;

  const handleUpdateTodoList = e => {
    const { name, value } = e.target;
    setUpdateTodolist({
      ...updateTodoList,
      [name]: value,
    });
  };

  const putTodoList = () => {
    axios
      .put(
        `${API.updateTodo}/${id}`,
        {
          title: updateTitle,
          content: updateContent,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'token',
          },
        }
      )
      .then(function (response) {
        alert('게시글이 업데이트되었습니다.');
        localStorage.getItem('token');
      })
      .catch(function (error) {
        alert('에러가 발생했습니다.');
      });
    getLists();
  };

  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(isToggled => !isToggled);
  };

  const [isModified, setIsModified] = useState(false);

  const changeModifiedField = () => {
    setIsModified(isModified => !isModified);
  };

  return (
    <UpdateForm onSubmit={putTodoList}>
      <TitleWrapper>
        {!isModified ? (
          <ReadTitle onClick={() => toggleMenu()}>{title}</ReadTitle>
        ) : (
          <UpdateTitle
            onChange={handleUpdateTodoList}
            defaultValue={title}
            required
          />
        )}
        <DeletePost onClick={() => onRemove(id)}>
          <RiDeleteBin6Line />
        </DeletePost>
      </TitleWrapper>
      {!isToggled ? null : (
        <ContentWrapper>
          {!isModified ? (
            <ReadContent>{content}</ReadContent>
          ) : (
            <UpdateContent
              onChange={handleUpdateTodoList}
              defaultValue={content}
              required
            />
          )}
          {!isModified ? (
            <ModifyingButton onClick={() => changeModifiedField()}>
              수정
            </ModifyingButton>
          ) : (
            <FinishingButton
              onClick={() => {
                changeModifiedField();
                putTodoList(id);
              }}
            >
              수정완료
            </FinishingButton>
          )}
        </ContentWrapper>
      )}
    </UpdateForm>
  );
};

const TitleWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};

  margin: 0.5rem 0;
  background-color: ${props => props.theme.colors.lightGray};
`;

const UpdateForm = styled.form`
  font-size: 1rem;
`;

const ReadTitle = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'start')};
  font-size: 1rem;
  cursor: pointer;
`;

const UpdateTitle = styled.input.attrs(props => ({
  name: 'updateTitle',
}))`
  width: 30rem;
  border: none;
  background-color: ${props => props.theme.colors.lightGray};
`;

const DeletePost = styled.div`
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  background-color: #84fffa;
`;

const ReadContent = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'start')};
  font-size: 1rem;
`;

const UpdateContent = styled.textarea.attrs(props => ({
  name: 'updateContent',
}))`
  ${props => props.theme.flex.flexBox('', '', 'start')};
  width: 30rem;
  border: none;
  background-color: #84fffa;
`;

const ModifyingButton = styled.button`
  border: none;
  margin: 0.3rem 0;
  width: 4rem;
  height: 1.5rem;
  font-size: 0.8rem;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

const FinishingButton = styled(ModifyingButton)``;

export default TodoLists;
