import React, { useEffect, useState } from "react";
import '../styles/MessageForm.css';

const  MessageForm = ({create}) => {
   const [message, setMessage] = useState({author:'', text:''});
   

   function addNewMessage(e) {
      e.preventDefault()
      const newPost = {
         ...message, id: Date.now()
      }
      create(newPost)
      setMessage({author:'', text:''})
   }
   
   return (
      <div className="form-box">
         <form className="form-messages">
            <input
               className="input-form"
               type="text"
               placeholder="Имя пользователя"
               value={message.author}
               onChange={e => setMessage({ ...message, author: e.target.value })}
            />
            <input
               className="input-form"
               type="text"
               placeholder="Текст сообщения" 
               value={message.text}
               onChange={e => setMessage({...message, text: e.target.value })}
            />
            <button onClick={addNewMessage} className="btn-form">Отправить</button>
         </form>
      </div>
   );
}

export default MessageForm;