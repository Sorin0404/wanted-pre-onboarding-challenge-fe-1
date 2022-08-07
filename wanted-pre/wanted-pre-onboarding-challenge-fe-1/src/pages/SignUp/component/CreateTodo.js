import React from 'react';
import styled from 'styled-components';

const CreateTodo = () => {
  return (
    <CreateTodoWrapper>
      <InputInfo>TodoList 내용을 입력해주세요.</InputInfo>
      <TitleInput />
      <ContentsInput />
    </CreateTodoWrapper>
  );
};

const CreateTodoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')};
  text-align: center;
  height: 100vh;
`;

const InputInfo = styled.div``;

const TitleInput = styled.input.attrs(props => ({
  placeholder: '제목',
}))``;

const ContentsInput = styled.input.attrs(props => ({
  placeholder: '내용을 입력해주세요.',
}))``;

export default CreateTodo;
