import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MessageItem } from './MessageItem';
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useStyles } from "./use-styles";
import { sendMessage } from '../../store/messages';

export const MessageBox = () => {
  const [message, setMessage] = useState("");
  const { roomId } = useParams();
  const styles = useStyles();
  const ref = useRef();
  const dispatch = useDispatch();

  const messages = useSelector(state => {
    return state.messages.messages[roomId] ?? []
  }

  );
  
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const addNewMessage = useCallback(
    (message, author = 'User') => {
      if (message) {
        dispatch(sendMessage(roomId, { author: author || 'Bot', message }));
      setMessage('');
    };
 
 }, [roomId, dispatch])
   
 const handlePressInput = ({ code }) => {
  if (code === "Enter") {
    addNewMessage(message);
  }
};


   useEffect(() => {
     const lastMess = messages[messages.length - 1];
     let timerId = null;

     if (messages.length && lastMess.author !== 'Bot') {
       timerId = setTimeout(() => {
         addNewMessage('Some very interesting answer!V_o_O_V', 'Bot');
       }, 700);
     }
     return () => {
       clearInterval(timerId);
       
     };   
   }, [messages, roomId, addNewMessage]);
  
   return (
     <>
        <div ref={ref}> 
            {messages.map((message) => //перебираем массив мепом , и отображаем его через компонент MessageItem (верстка) 
              <MessageItem message={message} key={message.date} roomId={roomId}/>
            )} 
                 
        </div>
        <form>
              <Input
                className={styles.input}
                type="text"
                placeholder="Текст сообщения"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={handlePressInput}
                fullWidth
                autoFocus={true}
                ref={function(input) {
                    if (input != null) {
                      input.focus();
                    }
                }}
                endAdornment={
                  <InputAdornment position='end'>
                    {message && (
                      <Send
                      className={styles.icon}
                      onClick={() => addNewMessage(message)} 
                      
                      />
                    )}    
                  </InputAdornment>
                }
                
              />
       </form>  
     </>
   );
   
};