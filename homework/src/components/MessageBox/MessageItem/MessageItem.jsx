import {memo} from "react";
import cls from 'classnames';
import styles from './MessageItem.module.css';


export const MessageItem = memo(({message}) => {
   return (
      <div
         className={cls(styles.messageBox, {
            [styles.userMessage]: message.author === 'User',
         })}>
         <h3>{message.author}</h3>
         <p>{message.message}</p>
         <p>{message.date}</p>
      </div>
   );
});