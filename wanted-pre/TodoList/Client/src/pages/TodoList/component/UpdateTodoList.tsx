import React, { useState } from 'react';

import DeleteTodoList from './DeleteTodoList';

import TodoListType from '../../../compiler/types';

import styled from 'styled-components';
import UseUpdateTodoLIsts from '../../../Hooks/todo/useUpdateTodoLIsts';

const UpdateTodoList = ({ todoList }: { todoList: TodoListType }) => {
  const { id, title, content } = todoList;

  const [updateTodoLists, setUpdateTodolists] = useState({
    updateTitle: title,
    updateContent: content,
  });

  const { updateTitle, updateContent } = updateTodoLists;

  const handleUpdateTodoList = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setUpdateTodolists({
      ...updateTodoLists,
      [name]: value,
    });
  };

  const putTodoList = () => {
    UseUpdateTodoLIsts(updateTitle, updateContent, id);
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
    <UpdateTodoListWrapper>
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
        <DeleteTodoList id={id} setIsToggled={setIsToggled} />
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
                putTodoList();
              }}
            >
              수정완료
            </FinishingButton>
          )}
        </ContentWrapper>
      )}
    </UpdateTodoListWrapper>
  );
};

const UpdateTodoListWrapper = styled.form`
  font-size: 1rem;
`;

const TitleWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  margin: 0.5rem 0;
  background-color: ${props => props.theme.colors.lightGray};
`;

const ReadTitle = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'start')};
  width: 28rem;
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

const ContentWrapper = styled.div`
  background-color: #84fffa;
`;

const ReadContent = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'start')};
  width: 30rem;
  font-size: 1rem;
  text-align: start;
  white-space: pre-wrap;
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

export default UpdateTodoList;
