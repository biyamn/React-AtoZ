import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const [todoList, setTodoList] = useState([]);

  const onSubmit = (e) => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });

    setTodoList(nextTodoList);

    setText('');
    e.preventDefault();
  };

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='container'>
      <div className='contents'>
        <h1>할 일 목록</h1>


        <form onSubmit={onSubmit}>
          <div className='lists'>
            {todoList.map((todoItem) =>(
              <div className='list'>
                <input className='checkbox' type='checkbox'/>
                <span className='listContent'>{todoItem.text}</span>
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
