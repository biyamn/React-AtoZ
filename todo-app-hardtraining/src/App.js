import './App.css';
import React, { useState, useRef } from 'react';
import Lists from "./components/Lists";

function App() {
  // useRef를 검색해서 썼음
  const no = useRef(1);

  // 투두데이터는 다른 곳에서도 쓰이기 때문에 이 데이터는 props로 넘겨 줄 것임
  const [text, setText] = useState('');

  const [todoList, setTodoList] = useState([]);


  return (
    <div className='container'>
      <div className='contents'>
        <h1>할 일 목록</h1>
        <Lists 
          no={no}
          text={text} 
          setText={setText} 
          todoList={todoList} 
          setTodoList={setTodoList} 
        />
      </div>
    </div>
  );
}

export default App;
