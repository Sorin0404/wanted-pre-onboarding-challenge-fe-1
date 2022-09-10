import axios from 'axios';

import { API } from '../../config';

export async function UseDeleteTodoLists(id: string) {
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
}
