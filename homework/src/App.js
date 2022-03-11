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

  };

  return (
    <div className='App'>
      <h2>Задание 1.2</h2>
      <div className='message-box'>{messages.map((object) => (
      <div className='user-box'>
        <h3 className='user-name'>{object.author}</h3>
        <p className='user-text'>{object.text}</p>
      </div>
    ))}</div>
      <button className='btn-mes' onClick={messageRend}>Click me</button>
      <hr/>
    </div>
  );
 
}

export default App;
