import React from "react";
import cls from 'classnames';
import styles from './MessageItem.module.css';


export function MessageItem ({message}) {
   return (
      <div
         className={cls(styles.messageBox, {
            [styles.userMessage]: message.author === 'User',
         })}>
         <h3>{message.author}</h3>
         <p>{message.text}</p>
         <p>{message.date}</p>
      </div>
   );
};