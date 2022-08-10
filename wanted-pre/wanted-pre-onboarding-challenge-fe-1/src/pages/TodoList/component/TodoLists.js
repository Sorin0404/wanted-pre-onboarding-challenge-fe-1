import React, { useState } from 'react';
import styled from 'styled-components';

import { RiDeleteBin6Line } from 'react-icons/ri';

const TodoLists = ({ todoList, onRemove }) => {
  const { id, title, content } = todoList;

  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(isToggled => !isToggled);
  };

  return (
    <>
      <TitleWrapper>
        <ReadTitle onClick={() => toggleMenu()}>{title}</ReadTitle>
        <DeletePost onClick={() => onRemove(id)}>
          <RiDeleteBin6Line />
        </DeletePost>
      </TitleWrapper>
      {!isToggled ? null : <ReadContent>{content}</ReadContent>}
    </>
  );
};

const TitleWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  margin: 0.5rem 0;
`;

const ReadTitle = styled.div`
  cursor: pointer;
`;

const DeletePost = styled.div`
  cursor: pointer;
`;

const ReadContent = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'start')};
`;

export default TodoLists;
