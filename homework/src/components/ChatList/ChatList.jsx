import { useState } from 'react';
import { List } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Chat } from './Chat';

export function ChatList() {
   const { roomId } = useParams();
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


   return (
      <List component='nav'>
         {chats.map((chat, index) => (
            <Link key={chat.id} to={`/chat/${chat.title}`}>
              <Chat
                  title={chat.title}
                  selected={roomId === chat.title}
               />
             </Link>   
         ))}
        
      </List>
   )
}