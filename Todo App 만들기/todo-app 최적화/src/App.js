import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    
    // 원래 있던 일에 새로운 할 일 더해주기
    // 아래 둘은 같은 의미!
    setTodoData([...todoData, newTodo])
    // setTodoData(prev => [...prev, newTodo]);

    // 입력란에 있던 글씨 지워주기
    setValue('');
  }
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>
          <Lists todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        </div>
      </div>
    )
  }


  export default App;