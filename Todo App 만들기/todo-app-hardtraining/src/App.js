import './App.css';

function App() {
  const handleSubmit = () => {

  }

  return (
    <div className='container'>
      <div className='contents'>
        <h1>할 일 목록</h1>

        <form onSubmit={handleSubmit}>
          <div className='lists'>
            <input className='checkbox' type='checkbox' />
            <span className='listContent'>청소하기</span>
            <button className='deleteBtn'>x</button>
          </div>

          <div className='inputs'>
            <input className='inputText' type='text' placeholder='해야 할 일을 입력하세요.' />
            <input className='inputSubmit' type='submit' value='입력'/>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
