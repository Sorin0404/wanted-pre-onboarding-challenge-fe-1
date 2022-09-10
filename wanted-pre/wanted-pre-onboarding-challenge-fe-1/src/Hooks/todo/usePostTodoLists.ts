import { API } from '../../config';
import axios from 'axios';

const UsePostTodoLists = async (title: string, content: string) => {
  try {
    const response = await axios.post(
      API.createTodo,
      {
        title: title,
        content: content,
      },
      {
        headers: {
          Authorization: 'token',
        },
      }
    );
    localStorage.getItem('token');
    if (response.status === (200 || 201)) {
      alert('게시글이 등록되었습니다.');
    }
  } catch (error) {
    alert('에러가 발생했습니다.');
  }
};

export default UsePostTodoLists;
