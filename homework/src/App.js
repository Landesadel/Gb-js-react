import React, { useEffect, useState } from 'react';
import MessageItem from './components/MessageItem';
import MessageForm from './components/MessageForm';
import './styles/App.css';



function App() {
  const [messagesList, setMessagesList] = useState([]);

  const createMessage = (newPost) => { // принимает объект с компонента MessageForm, и добавляет в массив, обнавляя значение стейта
    setMessagesList([...messagesList, newPost])

  }
  
  useEffect(() => {
    const lastMess = messagesList[messagesList.length - 1];
    let timerId = null

    if (messagesList.length && lastMess.author !== 'Bot') {
      timerId = setTimeout(() => {
        setMessagesList([
          ...messagesList,
          {
            author: 'Bot',
            text: 'HEllo from BOt!V_o_O_V'
          }
        ]);
      }, 700);
    }
    return () => {
      clearInterval(timerId)
    };
     
  }, [messagesList]);

  return (
    <div className='App'>
      <div className='rend-box'>
        <MessageForm create={createMessage}/>
      <div className='message-box'> 
         {messagesList.map((message, index) => //перебираем массив мепом , и отображаем его через компонент MessageItem (верстка) 
           <MessageItem number={index + 1} post={message} key={message.id} />
          )} 
                
      </div>
    </div>
  
    </div>
  );
 
}

export default App;
