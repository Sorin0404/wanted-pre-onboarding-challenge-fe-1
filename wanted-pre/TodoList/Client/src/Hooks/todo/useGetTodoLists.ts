import { API } from '../../config';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function getLists() {
  const { data } = await axios.get(API.getTodos, {
    headers: {
      Authorization: 'token',
    },
  });

  return data.data;
}

export function UseGetTodoLists() {
  const fallback: never[] = [];
  const { data = fallback } = useQuery(['getTodo'], getLists);

  return data;
}
