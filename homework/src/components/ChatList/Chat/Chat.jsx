import st from './Chat.module.css';
import { ListItemButton, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { lastMessSelector } from '../../../store/messages';
import { AccountCircle } from '@mui/icons-material';

const useStyles = makeStyles(() => {
   return {
      item: {
         '&.mui-selected:hover': {
            backgroundColor: '#2b5278',
         },
         '&.mui-selected': {
            backgroundColor: '#2b5278',
         },
      },
   };
});

export function Chat({ title, selected, onClick}) {
   const styles = useStyles();
   const message = useSelector(lastMessSelector(title));
   return (
      <ListItemButton
         className={styles.item}
         selected={selected}
         data-testid='wrapper'
      >
         <div className={st.boxChat} >
            <div className={st.boxInfoChat}>
               <ListItem className={st.boxIcon}>
                  <AccountCircle className={st.icon} />
               </ListItem>
               <ListItemText className={st.text} primary={title} onClick={onClick}/>
            </div>
            
            {message && (
                     <ListItemText  className={st.boxMess}>
                        <ListItemText primary={message.author} className={st.text} />
                        <ListItemText primary={message.message} className={st.textMessage}/>
                     </ListItemText>
                  )}
         </div>
      </ListItemButton>
   )
}