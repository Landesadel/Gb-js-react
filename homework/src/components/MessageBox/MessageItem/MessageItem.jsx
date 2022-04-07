import { memo } from "react";
import { format } from 'date-fns';
import { useDispatch } from "react-redux";
import { Button } from '@mui/material';
import cls from 'classnames';
import styles from './MessageItem.module.css';
import { deleteMessage } from "../../../store/messages";


export const MessageItem = memo(({ message }) => {
   const dispatch = useDispatch();
   return (
      <div
         className={cls(styles.messageBox, {
            [styles.userMessage]: message.author === 'User',
         })}>
         <h3>{message.author}</h3>
         <p>{message.message}</p>
         <Button onClick={() => {dispatch(deleteMessage(message))}}>x</Button>
         <p>{format(message.date, 'yyyy-mm-dd hh:mm:ss' ) }</p>
      </div>
   );
});