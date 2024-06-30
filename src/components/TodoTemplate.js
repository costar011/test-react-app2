import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

/**
 *
 * 
 * 이 컴포넌트는 함수형 컴포넌트
 * 파라미터로 받게 되는것은 props 인데
 * 이를 비구조화 할당 하여 원래 (props) => { ... } 를 해야 하는것을
 * ({form, children}) => { ... } 형태로 작성이 컴포넌트는 두가지의 props 를 받게 된다
 * 
 * children 의 경우엔 나중에 우리가 이 컴포넌트를 사용하게 될 때
 * 
 * <TodoListTemplate>여기에 있는 내용!</TodoListTemplate>
 * 
 * 이 들어가게 된다 (태그의 사이)
 * 여기서 form 은, 우리가 나중에 인풋과 버튼이 들어가있는 컴포넌트를 렌더링 할 때 사용 할 건데
 * 이것도 마치 children 을 사용하듯이 JSX 형태로 전달을 해준다
 * 
 * <TodoListTemplate form={<div>Test</div>}>
 *      <div> 여기엔 children 자리 </div>
 * </TodoListTemplate>
 * 
 * 여러 종류의 JSX 를 컴포넌트의 props 로 넣어주려면 위와 같은 방법은 정말 유용
 * 하지만 현재는 props 를 사용하지 않기 때문에 그냥 비워둠
 * 
 * 만약에 이런 Template 컴포넌트를 안 쓴다면?
 * 
 * Template 컴포넌트를 만드는건 리액트에서 필요한 요구사항이 아님
 * 다만, 제가 개발하면서 편하다고 생각하는 방식
 * 만약에 이걸 안한다면.. TodoListWrapper 란 컴포넌트를 만들게되어 children 내부에 모든걸 다 넣어주겠지
 * Ex: <TodoListWrapper><Form/><TodoList/></TodoListWrapper> 이런 방식은 전혀 문제되지 않음
 * 
 * 예를 들어서 Form 과 TodoList 사이에 테두리를 설정한다고 했을 때
 * 만약 Template 컴포넌트를 사용하는 경우에 이런 스타일은 Template 내에서 주면 되겠지만,
 * Wrapper 같은 컴포넌트를 사용하게 되면 해당 스타일을 Form 혹은 TodoList 쪽에 넣어주어야함
 * 
 */
export default TodoListTemplate;