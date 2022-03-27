import st from './Chat.module.css';
import { ListItemButton, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
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

export function Chat({ title, selected, handleListItemClick}) {
   const styles = useStyles();
   return (
      <ListItemButton
         className={styles.item}
         selected={selected}
         onClick={handleListItemClick}
      >
         <ListItem>
            <AccountCircle
               className={st.icon}
            />
         </ListItem>
         <ListItemText className={st.text} primary={title} />
      </ListItemButton>
   )
}