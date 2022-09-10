# 원티드 프리온보딩 챌린지 프론트엔드 코스 

안녕하세요.

이번 원티드 프리온보딩 챌린지 프론트엔드 코스에 참여하게 된 이해용입니다.

감사합니다.

## 참여 기간
2022.08.08 ~2022.08.20

## 과제 진행 상황

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다.
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다. <br />
- [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요.
  
- 이메일과 비밀번호의 유효성을 확인합니다. <br />
- [x] 이메일 조건 : 최소 @, . 포함 <br />
- [x] 비밀번호 조건 : 8자 이상 입력 <br />
- [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요. <br />

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요. <br />
- [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요. <br />
- [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요. <br />
- [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요.

### Assignment 2 - Todo List
- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요. <br />
- [x] 목록 / 상세 영역으로 나누어 구현해주세요. <br />
- [x] Todo 목록을 볼 수 있습니다. <br />
- [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다. <br />
- [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다. <br />
- [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다. 

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요. <br />
- [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다. <br />
- [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요. 

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요. <br />
- [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다. <br />

## TODO 앱 개선
### 함수명 변경
delete 통신시 명확하지 않던 `onRemove` 함수명을 `deleteTodoList`로 변경했습니다.

```jsx
  const deleteTodoList = async id => {
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
    getLists();
  };
```

### 컴포넌트 분리
한 컴포넌트에 다양한 기능을 넣었으나 컴포넌트에 맞는 기능만 구현 할 수 있도록 분리 했습니다.

변경 전 불명확한 컴포넌트 분리 <br />
<img width="194" alt="변경 전 컴포넌트 상황" src="https://user-images.githubusercontent.com/81001516/184344929-31c3fb70-2fb1-49fb-9439-1b6ae2739428.png"> <br />

변경 후 컴포넌트 <br />
<img width="213" alt="변경 후 컴포넌트 분리 상황" src="https://user-images.githubusercontent.com/81001516/184344666-5c2a8100-fb23-446f-84f0-46a53b82b644.png"> <br />

## TypeScript 변환

### index.tsx 문제
<img width="920" alt="index_error" src="https://user-images.githubusercontent.com/81001516/184603002-3587024d-75f6-44c8-8780-69dbdc8715f9.png">

```jsx
// 해결 방법
const root = ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment
);
```

### module error
tsconfig.json 파일 생성 후 값을 넣어주니 에러 해결 완료했습니다.

### No overload matches this call.
<img width="1104" alt="No overload matches this call" src="https://user-images.githubusercontent.com/81001516/184603617-e3c2c2e1-0cef-4b6a-aa05-05eca6baa4f4.png">

styled-component 사용 시 해당 에러가 발생되어 타입 값을 지정해주어 에러를 해결했습니다.

```jsx
interface InputType {
  email: string;
  password: string;
  checkpassword: string;
}

...

const EmailInput = styled.input.attrs<InputType>(props => ({
  type: 'email',
  name: 'email',
  placeholder: '이메일 주소',
}))`
  width: 20rem;
  height: 3rem;
  margin: 0.5rem;
  padding: 0.7rem;
  font-size: 1.2rem;
`;
```

## Custom Hook

기존에 없었던 Custom Hook 을 만들어 기능에 맞는 파일을 사용 할 수 있도록 분리 시켰습니다.

<img width="215" alt="Custom Hook 폴더 구조" src="https://user-images.githubusercontent.com/81001516/189472873-a0fe53c1-400c-4110-aabe-8419cc6db327.png">


## React Query

React Query를 적용하여 useQuery를 사용하여 데이터를 가져올 수 있도록 기능 구현을 했습니다.

```tsx
// useGetTodoLists.ts

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


// ReadTodo.tsx

const ReadTodo = () => {
  const getTodoLists = UseGetTodoLists();

  return (
    <ReadTodoWrapper>
      <TodoListInfo>TodoList</TodoListInfo>
      {getTodoLists.map((todoList: TodoListType, index: number) => (
        <UpdateTodoList todoList={todoList} key={index} />
      ))}
    </ReadTodoWrapper>
  );
};
```

mutation을 통한 post/put/delete 기능 구현은 추후 적용 예정입니다.


## 느낀점
느낀점은 블로그 회고록에 적어 밑의 링크 클릭하여 확인 부탁드립니다.

[블로그로 이동](https://velog.io/@sorin44/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%B1%8C%EB%A6%B0%EC%A7%80-1%EC%B0%A8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)
