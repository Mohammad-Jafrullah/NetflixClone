import React, { useState } from 'react';
import './Storing.css'

const MyComponent = () => {
  const [inputText, setInputText] = useState('');
  const [jsonData, setJsonData] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create JSON object with input data
    const data = {
      text: inputText
    };

    // Update JSON data state
    setJsonData(data);

    // Clear input field
    setInputText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      {jsonData && (
        <div>
          <p>Submitted Data:</p>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
