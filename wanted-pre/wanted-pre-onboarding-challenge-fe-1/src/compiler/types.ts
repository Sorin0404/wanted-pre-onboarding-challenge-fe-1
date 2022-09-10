import { AxiosError } from 'axios';

export default interface TodoListType {
  content: string;
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
}

export default interface LoginType {
  id: string;
  pw: string;
}

export default interface SignUpType {
  email: string;
  password: string;
  checkpassword: string;
}

type TodosErrorData = {
  message: {
    id: string;
    message: string;
  }[];
}[];

export type TodosError = AxiosError<{
  statusCode: number;
  error: string;
  message: TodosErrorData;
  data: TodosErrorData;
}>;
