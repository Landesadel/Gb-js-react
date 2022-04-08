import { memo } from "react";
import { format } from 'date-fns';
import { useDispatch } from "react-redux";
import cls from 'classnames';
import styles from './MessageItem.module.css';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
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
         <div className={styles.subBox}>
            <button className={styles.btnDel} onClick={() => { dispatch(deleteMessage(message.id )) }}>
               <DeleteForeverTwoToneIcon fontSize="small"/>
            </button>
            <p>{format(message.date, 'yyyy-mm-dd hh:mm:ss' ) }</p>
         </div>
         
      </div>
   );
});