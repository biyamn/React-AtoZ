import './App.css';
import React, { useState, useRef } from 'react';

function App() {
  const no = useRef(1);

  const [text, setText] = useState('');

  const [todoList, setTodoList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    // 빈 칸을 입력하면 입력하지 않기
    // 아니 이걸 맨 위쪽에 써주니까 갑자기 됨 왜일까???
    // e.preventDefault();보다는 아래에 써줘야되는 걸 발견함
    if (!text) return;
   
    const nextTodoList = todoList.concat({
      id: no.current++,
      text,
      checked: false,
    });
    
    setTodoList(nextTodoList);
    setText('');
  };

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const checkedToggle = (id) => {
    setTodoList(todoList.map(todoItem=>
      todoItem.id===id ? {...todoItem, checked: !todoItem.checked} : todoItem
    ))
  }

  return (
    <div className='container'>
      <div className='contents'>
        <h1>할 일 목록</h1>


        <form onSubmit={onSubmit}>
          <div className='lists'>
            {todoList.map((todoItem) =>(
              // Warning: Each child in a list should have a unique "key" porp
              <div className='list' key={todoItem.id}>
                <input onChange={()=>checkedToggle(todoItem.id)} className="checkbox" type='checkbox'/>
                <span className={`listContent &{ todoItem.checked ? 'checked' : '' }`}>{todoItem.text}</span>
                <button type='button' className='deleteBtn'>x</button>
              </div>
            ))}
          </div>

          <div className='inputs'>
            <input 
              onChange={onChangeInput} 
              className='inputText' 
              type='text' 
              placeholder='해야 할 일을 입력하세요.'
              value={text}
            />
            <input 
              className='inputSubmit' 
              type='submit' 
              value='입력'
            />
          </div>
        </form>


      </div>
    </div>
  );
}

export default App;
