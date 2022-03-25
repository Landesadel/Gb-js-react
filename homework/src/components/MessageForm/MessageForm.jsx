import React, { useState } from "react";
import { Button, Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useStyles } from "./use-styles";
import './MessageForm.css';

export const MessageForm = ({ create }) => {
   const [message, setMessage] = useState({ author: '', text: '' });

   const styles = useStyles();
   

   function addNewMessage(e) {
      e.preventDefault()
      if (message.text) {
         const newPost = {
            ...message, author: 'User', id: Date.now()
         }
         create(newPost)
         setMessage({ author: '', text: '' })
      };
   
   }
   
   return (
      <div className="form-box">
         <form className="form-messages">
            {/* <input
               className="input-form"
               type="text"
               placeholder="Имя пользователя"
               value={message.author}
               onChange={e => setMessage({ ...message, author: e.target.value })}
            /> */}
            <Input
               className={styles.input}
               type="text"
               placeholder="Текст сообщения"
               value={message.text}
               onChange={e => setMessage({ ...message, text: e.target.value })}
               fullWidth
               endAdornment={
                  <InputAdornment position='end'>
                     <Send className={styles.icon} onClick={addNewMessage}/>
                  </InputAdornment>
               }
               
            />
         </form>
      </div>
   );
};
