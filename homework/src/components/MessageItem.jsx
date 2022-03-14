import React from "react";


const  MessageItem = (props) => {
   return (
      <div className='user-box'>
         <h3 className='user-name'>{props.number}. {props.post.author}</h3>
         <p className='user-text'>{props.post.text}</p>
      </div>
   );
}

export default MessageItem;