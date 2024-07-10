# 함수형 컴포넌트

파라미터로 받게 되는것은 props 인데 이를 비구조화 할당 하여 원래 (props) => { ... } 를 해야 하는것을 ({form, children}) => { ... } 형태로 작성이 컴포넌트는 두가지의 props 를 받게 된다

`children` 의 경우엔 나중에 우리가 이 컴포넌트를 사용하게 될 때,
`<TodoListTemplate>여기에 있는 내용!</TodoListTemplate>`이 들어가게 된다 (태그의 사이)
여기서 `form` 은, 우리가 나중에 인풋과 버튼이 들어가있는 컴포넌트를 렌더링 할 때 사용 할 건데
이것도 마치 `children` 을 사용하듯이 `JSX` 형태로 전달을 해준다

```
<TodoListTemplate form={<div>Test</div>}>
       <div> 여기엔 children 자리 </div>
  </TodoListTemplate>
```

여러 종류의 JSX 를 컴포넌트의 props 로 넣어주려면 위와 같은 방법은 정말 유용
하지만 현재는 props 를 사용하지 않기 때문에 그냥 비워둠

#### 만약에 이런 Template 컴포넌트를 안 쓴다면?

Template 컴포넌트를 만드는건 리액트에서 필요한 요구사항이 아님
다만, 제가 개발하면서 편하다고 생각하는 방식 만약에 이걸 안한다면 TodoListWrapper란 컴포넌트를 만들게되어 children 내부에 모든걸 다 넣어주겠지


```
<TodoListWrapper> <Form/> <TodoList/> </TodoListWrapper>
```
이런 방식은 전혀 문제되지 않음

예를 들어서 Form 과 TodoList 사이에 테두리를 설정한다고 했을 때
만약 Template 컴포넌트를 사용하는 경우에 이런 스타일은 Template 내에서 주면 되겠지만,
Wrapper 같은 컴포넌트를 사용하게 되면 해당 스타일을 Form 혹은 TodoList 쪽에 넣어주어야함

#### 컴포넌트는 총 4가지의 props 를 받아옴

- value: 인풋의 내용
- onCreate: 버튼이 클릭 될 때 실행 될 함수
- onChange: 인풋 내용이 변경 될 때 실행되는 함수
- onKeyPress: 인풋에서 키를 입력 할 때 실행되는 함수
- 이 함수는 나중에 Enter 가 눌렸을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용한다

#### FromCSS
레이아웃을 위하여 flex 가 사용되었고 이 컴포넌트를 App 에 렌더링 하면 된다.


## 세번째 컴포넌트, TodoItemList 만들기
이 컴포넌트는 곧 이어 만들 TodoItem 컴포넌트 여러개를 렌더링해주는 역할을 함
Template 컴포넌트를 만들었기 때문에 이 컴포넌트에선 따로 스타일링 할 건 없다

‘리스트’를 렌더링하게 될 때
특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성
그 이유는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문임