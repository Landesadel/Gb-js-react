import React, { useEffect, useState } from 'react';
import { MessageForm, MessageItem } from '../../components';
import './MessageBox.css';

export const MessageBox = () => {
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
       <div className='rend-box'>
         <MessageForm create={createMessage}/>
       <div className='message-box'> 
          {messagesList.map((message, index) => //перебираем массив мепом , и отображаем его через компонент MessageItem (верстка) 
            <MessageItem   post={message} key={message.id} />
           )} 
                 
       </div>
     </div>
   );
   
};