import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {  Header } from './components';
import { ProfilePage, ChatPage } from './pages';
import { store } from './store';
import './styles/App.css';






ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<h1> Home page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage/>}/>
          <Route path="*" element={<h1> Page is not found! /_(O_o )</h1>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
