import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState('');

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    setState('');
    e.preventDefault();
  };

  return (
    <div className='container'>
      <div className='contents'>
        <h1>할 일 목록</h1>

        <form onSubmit={onSubmit}>
          <div className='lists'>
            <input className='checkbox' type='checkbox' />
            <span className='listContent'>청소하기</span>
            <button className='deleteBtn'>x</button>
          </div>

          <div className='inputs'>
            <input onChange={onChange} className='inputText' type='text' placeholder='해야 할 일을 입력하세요.' />
            <input className='inputSubmit' type='submit' value='입력'/>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
