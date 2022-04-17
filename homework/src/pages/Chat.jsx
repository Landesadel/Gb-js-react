import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { Template, ChatList, MessageBox } from '../components';
import { getConversations } from '../store/conversations';



export const ChatPage = () => {
   const dispatch = useDispatch();
   const navback = useNavigate('/chat');
  
   useEffect(() => {
      const listener = ({ code }) => {
      
         if (code === 'Escape') {
            navback();
         }
      };
      document.addEventListener('keydown', listener)

      return () => {
         document.removeEventListener('keydown', listener);
      };
   }, [navback]);

   useEffect(() => {
      dispatch(getConversations());   
    }, [dispatch])

   return (
      <>
         <Routes>
            <Route
               path='/'
               element={
                  <Template
                     messages={
                        <h1
                          style={{
                              color: '#9a9fa1',
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '60px'
                          }}
                        >
                           ...Select a chat...
                       </h1>}
                     chats={<ChatList />}  
                  />
               }
            />
            <Route path=':roomId' element={
               <Template
                  messages={<MessageBox />}
                  chats={<ChatList />}    
               />
               }
           />
         </Routes>
      </>
   );
};