import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { MessageBox, Template, ChatList, Header } from './components';
import './styles/App.css';



const App = () => {
 

  return (
    <>
      <Template
        messages={<MessageBox />}
        chats={<ChatList />}
        header={<Header />}    
      />
    </>
  );
 
};


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
