# Todo 리스트

## 배포 주소

https://codeit-sprint-5sr8.vercel.app/

## 프로젝트 소개

사용자가 할 일(To do)을 관리하고 완료된 일(Done)을 확인할 수 있도록 돕는 할 일 관리 애플리케이션입니다.

## 주요 기능

- 할 일 추가하기: 사용자는 해야 할 일을 입력하여 목록에 추가할 수 있습니다.
- 할 일 완료/취소: 할 일을 클릭하여 완료 상태로 전환하거나 취소할 수 있습니다.
- 할 일 목록 관리: 진행 중인 할 일과 완료된 일을 각각 별도의 섹션으로 나누어 관리할 수 있습니다.

## 프로젝트 구조

```
├── src
│   ├── components
│   │   ├── AddTodoForm.tsx
│   │   ├── Layout.tsx
│   │   ├── NavBar.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   ├── contexts
│      └── TodoContext.tsx
├── tailwind.config.ts
└── tsconfig.json
```

## 스크린샷

- 홈페이지
  ![home](/todolist/image/home.png)
- 진행 중인 할 일이 없을 때:
  ![emptytodo](/todolist/image/done.png)
- 완료된 할 일이 없을 때:
  ![emptydone](/todolist/image/todo.png)
- 상세 페이지:
  ![emptydone](/todolist/image/details.png)
- 항목 수정:
  ![emptydone](/todolist/image/edit.png)
- 상세페이지 -> 홈페이지:
  ![emptydone](/todolist/image/home2.png)
