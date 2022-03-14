import React, { useCallback, useEffect, useState } from 'react';
import MessageItem from './components/MessageItem';
import MessageForm from './components/MessageForm';
import './styles/App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';


function App() {
  const [messages, setMessages] = useState([]);
  const messagesList = [
    { id: 1, author: 'some author1', text: 'some text1' },
    { id: 2, author: 'some author2', text: 'some text2' },
    { id: 3, author: 'some author3', text: 'some text3' },
  ];

  function addMessages() {
    setMessages(messagesList)
  }
  function rmvMessages() {
    setMessages([])
  }

  const createMessage = (newPost) => {
    setMessages([...messages, newPost])

  }
  
  useEffect(() => {
    const botText = 'test'
    const lastMess = messages[messages.length - 1]
    let timerId = null

    if (lastMess !== botText) {
      timerId = setTimeout(() => {
        setMessages([...messages, botText])
      } , 700)  
    }
    return () => {
      clearInterval(timerId)
    }
     
    }, [messages])

  return (
    <div className='App'>
      <div className='rend-box'>
        <MessageForm create={createMessage}/>
      <div className='message-box'>
         {messages.map((message, index) => 
           <MessageItem number={index + 1} post={message} key={message.id} />
          )} 
                
      </div>
        <div className='btn-box'>
          
          <button className='btn-mes' onClick={addMessages}>Add messages</button>
          <button className='btn-mes' onClick={rmvMessages}>Remove</button>
      </div>
    </div>
  
    </div>
  );
 
}

export default App;
