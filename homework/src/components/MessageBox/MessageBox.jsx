import React, { useEffect, useState } from 'react';
import { MessageItem } from './MessageItem';
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useStyles } from "./use-styles";
import './MessageBox.css';

export const MessageBox = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [message, setMessage] = useState("");
  const styles = useStyles();

 

  const addNewMessage = () => {
    // e.preventDefault()
    if (message) {
      setMessagesList([
        ...messagesList,
        {
          author: 'User',
          text: message,
          date: new Date().toLocaleDateString(),
        },
      ]);
           
      setMessage('');
    };
 
 };
   
  const pressInput = ({ code }) => {
    if (code === 'Enter') {
      addNewMessage();
    }
  };


   useEffect(() => {
     const lastMess = messagesList[messagesList.length - 1];
     let timerId = null;
 
     if (messagesList.length && lastMess.author !== 'Bot') {
       timerId = setTimeout(() => {
         setMessagesList([
           ...messagesList,
           {
             author: 'Bot',
             text: 'HEllo from BOt!V_o_O_V',
             date: new Date().toLocaleDateString(),
           },
         ]);
       }, 700);
     }
     return () => {
       clearInterval(timerId);
     };   
   }, [messagesList]);
 
   return (
     <>
        <div> 
            {messagesList.map((message) => //перебираем массив мепом , и отображаем его через компонент MessageItem (верстка) 
              <MessageItem   message={message} key={message.id} />
            )} 
                 
        </div>
        <form>
              <Input
                className={styles.input}
                type="text"
                placeholder="Текст сообщения"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={pressInput}
                fullWidth
                endAdornment={
                    <InputAdornment position='end'>
                      <Send className={styles.icon} onClick={addNewMessage}/>
                    </InputAdornment>
                }
                
              />
       </form>  
     </>
   );
   
};