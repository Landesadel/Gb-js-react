import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      author: 'some author1',
      text: 'some text1'
    },
    {
      author: 'some author1',
      text: 'some text1'
    },
    {
      author: 'some author1',
      text: 'some text1'
    }
  ]);


  return messages.map((author, text) =>
    <div className='App'>
       <h2>{author}</h2>
       <p>{text}</p>   
    </div>

  );
}

export default App;
