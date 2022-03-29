import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MessageBox, Template, ChatList, Header } from './components';
import { ProfilePage } from './pages';
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
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<h1> Home page</h1>} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="*" element={<h1> Page is not found! /_(O_o )</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
