import React, { useState } from 'react';

// Create a react app that consists of a single input field.  
// The field should accept any input, however the letter 'b' should always be capitalized.

const ChangeString = props => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = e => {
    e.preventDefault();
    setInput(e.target.value);
    setOutput(updateString(e.target.value));
  };

  const updateString = input => {
    return input.replaceAll('b', 'B');
  };

  return (
    <div className='string-container'>
      <h1>String Manipulation</h1>
      <label>
        <span>Input:</span>
        <textarea 
          type='text'
          name='inputName'
          onChange={handleInput}
          rows='4'
          value={input}
        >
        </textarea>
      </label>

      <div>
        Output: <p className='string-output'>{output}</p>
      </div>
    </div>
  )
};

export default ChangeString;