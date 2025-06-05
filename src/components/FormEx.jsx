import React, { useState } from 'react';

function FormEx() {
  const [inputValue, setInputValue] = useState('');

  const [storedValue, setStoredValue ] = useState('');

  const handleChange = (event) => {
    
    setInputValue(event.target.value);
    
  };

  const handleSubmit=(event)=>{
    event.preventDefault() // stops refreshing the page
    setStoredValue(inputValue);
  }

  return (
    <div>
      <h2>Hello, {storedValue}</h2>
      <form onSubmit={handleSubmit}>
        
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
      <button className='submitBtn' onSubmit={ handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormEx;
