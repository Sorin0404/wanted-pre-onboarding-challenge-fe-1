import { API } from '../../config';
import axios from 'axios';

const UseSignUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      API.signUp,
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
    if (response.status === (200 || 201)) {
      alert('계정이 성공적으로 생성되었습니다');
    }
  } catch (error) {
    alert(`${error}가 발생했습니다.`);
  }
};

export default UseSignUp;
