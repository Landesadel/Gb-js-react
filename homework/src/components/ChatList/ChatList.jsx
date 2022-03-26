import { useState } from 'react';
import { List } from '@mui/material';
import { Chat } from './Chat';

export function ChatList() {
   const [chats] = useState(['Chat1', 'Chat2', 'Chat3']);
   const [selectIndex, setSelectIndex] = useState(0);

   return (
      <List component='nav'>
         {chats.map((chat, index) => (
            <Chat
               title={chat} 
               selected={selectIndex === index}
               handleListItemClick={() => setSelectIndex(index)}
            />
         ))}
      </List>
   )
}