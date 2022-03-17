import React, { useEffect, useState } from 'react';
import MessageItem from './components/MessageItem';
import MessageForm from './components/MessageForm';
import './styles/App.css';



function App() {
  const [messagesList, setMessagesList] = useState([]);
  // const messagesListArr = [
  //   { id: 1, author: 'some author1', text: 'some text1' },
  //   { id: 2, author: 'some author2', text: 'some text2' },
  //   { id: 3, author: 'some author3', text: 'some text3' },
  // ];

  // function addMessages() {
  //   setMessagesList(messagesListArr)
  // }
  function rmvMessages() { //rкнопка очистки массива
    setMessagesList([])
  }

  const createMessage = (newPost) => { // принимает объект с компонента MessageForm, и добавляет в массив, обнавляя значение стейта
    setMessagesList([...messagesList, newPost])

  }
  
  useEffect(() => {
    const botText = { author: 'Bot', text: 'HEllo from BOt!V_o_O_V' };
    const botStr = JSON.stringify(botText);
    const lastMess = JSON.stringify(messagesList[messagesList.length - 1]);
    let timerId = null

    if (lastMess !== botStr) {
      timerId = setTimeout(() => {
        setMessagesList([...messagesList, botText])
      } , 700)  
    }
    return () => {
      clearInterval(timerId)
    }
     
    }, [messagesList])

  return (
    <div className='App'>
      <div className='rend-box'>
        <MessageForm create={createMessage}/>
      <div className='message-box'> 
         {messagesList.map((message, index) => //перебираем массив мепом , и отображаем его через компонент MessageItem (верстка) 
           <MessageItem number={index + 1} post={message} key={message.id} />
          )} 
                
      </div>
        <div className='btn-box'>      
          {/* <button className='btn-mes' onClick={addMessages}>Add messages</button> */}
          <button className='btn-mes' onClick={rmvMessages}>Remove</button>
      </div>
    </div>
  
    </div>
  );
 
}

export default App;
