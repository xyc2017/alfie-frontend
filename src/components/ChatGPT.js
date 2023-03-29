import React, { useState } from 'react';
import axios from 'axios';

const Gpt = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/gpt', { prompt });
    setOutput(response.data.text);
  };

  return (
    <div>
      <h1>Ask Alfie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="prompt">Prompt: </label>
          <input type="text" id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </div>
        <button type="submit">Generate</button>
      </form>
      <div>
        <label htmlFor="output">Output: </label>
        <textarea id="output" value={output} readOnly />
      </div>
    </div>
  );
};

export default Gpt;
// Note that this is just a basic example, and you may need to modify it to fit your specific use case.





