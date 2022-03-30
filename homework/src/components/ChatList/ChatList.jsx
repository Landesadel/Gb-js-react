import { useState } from 'react';
import { List } from '@mui/material';
import { Link } from 'react-router-dom';
import { Chat } from './Chat';

export function ChatList() {
   const [chats] = useState([ 
      {
         title: 'Chat1',
         id: Math.random(),
      },
      {
      title: 'Chat2',
      id: Math.random(),
      },
      {
         title: 'Chat3',
         id: Math.random(),
      },  
   ]);
   
   
   const [selectIndex, setSelectIndex] = useState(0);


   return (
      <List component='nav'>
         {chats.map((chat, index) => (
            <Link key={chat.id} to={`/chat/${chat.title}`}>
              <Chat
                  title={chat.title}
                  selected={selectIndex === index}
                  handleListItemClick={() => setSelectIndex(index)}
               />
             </Link>   
         ))}
        
      </List>
   )
}