import { API } from '../../config';
import axios from 'axios';

const UseLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      API.login,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: 'token',
        },
      }
    );
    localStorage.setItem('token', response.data.token);
    alert('성공적으로 로그인 했습니다');
  } catch (error) {
    alert('ID 또는 비밀번호가 틀립니다.');
  }
};

export default UseLogin;
