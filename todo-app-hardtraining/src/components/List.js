import React, { useState } from 'react';

const List = (props) => {

  const editedToggle = (id) => {
    props.setTodoList(props.todoList.map(todoItem=>
      todoItem.id===id ? {...todoItem, edited: !todoItem.edited} : todoItem
    ))
    console.log("edited");
  };

  const onDelete = (id) => {
    props.setTodoList(props.todoList.filter(todoItem=>
      todoItem.id !== id
    ));
  };

  const checkedToggle = (id) => {
    props.setTodoList(props.todoList.map(todoItem=>
      todoItem.id===id ? {...todoItem, checked: !todoItem.checked} : todoItem
    ))
    console.log(props.checked);
  };
  

  return (
    <div className='list' key={props.id}>
      <input 
        onClick={()=>checkedToggle(props.id)} 
        className="checkbox" 
        type='checkbox'
      />

      {/* <span className={`listContent &{ todoItem.checked ? 'checked' : '' }`}>{todoItem.text}</span> */}
      <span  className={ "listContent" + (props.checked ? " checked" : '')}>{props.text}</span>
      
      <button 
        className="editBtn" 
        onClick={() => editedToggle(props.id)}>
        {props.edited ? "저장" : "수정"}
      </button>

      <button 
        type='button' 
        className='deleteBtn'
        onClick={() => onDelete(props.id)}
      >X</button>
    </div>
  );
};

export default List;