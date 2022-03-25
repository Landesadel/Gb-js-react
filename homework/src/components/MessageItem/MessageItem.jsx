import React from "react";


export const MessageItem = (props) => {
   return (
      <div className='user-box'>
         <h3 className='user-name'>{props.post.author}</h3>
         <p className='user-text'>{props.post.text}</p>
      </div>
   );
};