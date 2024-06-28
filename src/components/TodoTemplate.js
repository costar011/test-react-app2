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
 * 이 컴포넌트는 함수형 컴포넌트 입니다. 파라미터로 받게 되는것은 props 인데
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
 */
export default TodoListTemplate;