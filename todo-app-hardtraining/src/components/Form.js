import React, { useState } from 'react';

const Form = (props) => {

  const onChangeInput = (e) => {
    props.setText(e.target.value);
  };

  return (
    <div className='form'>
      <input 
        onChange={onChangeInput} 
        className='inputText' 
        type='text' 
        placeholder='해야 할 일을 입력하세요.'
        value={props.text}
      />
      <input 
        className='inputSubmit' 
        type='submit' 
        value='입력'
      />
    </div>
  );
};

export default Form;