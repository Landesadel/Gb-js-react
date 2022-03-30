import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {  Header } from './components';
import { ProfilePage, ChatPage } from './pages';
import './styles/App.css';






ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<h1> Home page</h1>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/*" element={<ChatPage/>}/>
        <Route path="*" element={<h1> Page is not found! /_(O_o )</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
