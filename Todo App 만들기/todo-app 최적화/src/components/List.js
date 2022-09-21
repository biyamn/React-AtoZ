import React from 'react';

function List (props) {

  console.log(props);

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };

  const handleCompleteChange = (id) => {
    let newTodoData = props.todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })
    props.setTodoData(newTodoData);
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  };

  const handleClick = (id) => {
    let newTodoData = props.todoData.filter(data => data.id !== id);
    console.log('newTodoData', newTodoData);
    props.setTodoData(newTodoData);
  };

  return (
    <div>
      {props.todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/>
            {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default List;