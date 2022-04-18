import { useSelector, useDispatch } from 'react-redux';
import { List, Button} from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Chat } from './Chat';
import st from './chatList.module.css';
import { createConversationFb, deleteConversations, conversationsSelector } from '../../store/conversations';


export function ChatList() {
   const { roomId } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
   const { conversations, pending } = useSelector(conversationsSelector);

   const create = () => {
      const name = prompt(`Enter the chat's name`);
      const validName = !conversations.includes(name);
      if (!!name && validName) {
         dispatch(createConversationFb(name));
      } else {
         alert('Name error!')
      }
   };
   const deleteChat = (conversation) => {
      dispatch(deleteConversations(conversation));
      navigate('/chat');
   };

   if (pending) {
      return <h1>...pending...</h1>
   }


   return (
      <List component='nav'>
         <Button onClick={create}>Create new chat</Button>
         {conversations.map((chat, index) => (
            <div key={index}>
               <Link to={`/chat/${chat}`}>
                  
                  <Chat
                     title={chat}
                     selected={roomId === chat}
                  />
                  <button className={st.btnChat} onClick={() => deleteChat(chat)}>
                     delete
                  </button>
               </Link>  
            </div>
             
         ))}
        
      </List>
   )
}