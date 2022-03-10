import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const messagesList = [
    {
      author: 'some author1',
      text: 'some text1'
    },
    {
      author: 'some author2',
      text: 'some text2'
    },
    {
      author: 'some author3',
      text: 'some text3'
    }
  ];
  
  function messageRend() {
    
    setMessages([...messagesList])

    return messages.map((object) => (
      <div>
        <h2>{object.author}</h2>
        <p>{object.text}</p>
      </div>
    ))
  };

  return (
    <div className='App'>
      <div>{messages}</div>
      <button onClick={messageRend}></button>
    </div>
  );
 
}

export default App;
