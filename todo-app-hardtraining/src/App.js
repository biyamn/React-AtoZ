import './App.css';
import React, { useState, useRef } from 'react';
import Lists from "./components/Lists";

function App() {
  // useRef를 검색해서 썼음
  const no = useRef(1);

  const [text, setText] = useState('');

  const [todoList, setTodoList] = useState([]);

  return (
    <div className='container'>
      <div className='contents'>
        <h1>할 일 목록</h1>
        <Lists 
          text={text} 
          setText={setText} 
          todoList={todoList} 
          setTodoList={setTodoList} 
          no={no}
        />
      </div>
    </div>
  );
}

export default App;
