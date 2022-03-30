import { Route, Routes } from 'react-router-dom';
import { Template, ChatList, MessageBox } from '../components';

export const ChatPage = () => {
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