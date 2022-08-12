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

## Week1 - Day1
### TODO 앱 개선
#### 함수명 변경
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

#### 컴포넌트 분리
한 컴포넌트에 다양한 기능을 넣었으나 컴포넌트에 맞는 기능만 구현 할 수 있도록 분리 했습니다.

변경 전 불명확한 컴포넌트 분리 <br />
<img width="194" alt="변경 전 컴포넌트 상황" src="https://user-images.githubusercontent.com/81001516/184344929-31c3fb70-2fb1-49fb-9439-1b6ae2739428.png"> <br />

변경 후 컴포넌트 <br />
<img width="213" alt="변경 후 컴포넌트 분리 상황" src="https://user-images.githubusercontent.com/81001516/184344666-5c2a8100-fb23-446f-84f0-46a53b82b644.png"> <br />

