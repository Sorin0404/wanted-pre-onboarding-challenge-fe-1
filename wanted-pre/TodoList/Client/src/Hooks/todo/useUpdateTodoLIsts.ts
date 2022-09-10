import { API } from '../../config';
import axios from 'axios';

const UseUpdateTodoLIsts = async (
  title: string,
  content: string,
  id: string
) => {
  try {
    const response = await axios.put(
      `${API.updateTodo}/${id}`,
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
      alert('게시글이 업데이트되었습니다.');
    }
  } catch (error) {
    alert('에러가 발생했습니다.');
  }
};

export default UseUpdateTodoLIsts;
