import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {  Header } from './components';
import { ProfilePage, ChatPage, GistsPage } from './pages';
import { store, persistor } from './store';
import './styles/App.css';






ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<h1> Home page</h1>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/gists" element={<GistsPage/>}/>
            <Route path="*" element={<h1> Page is not found! /_(O_o )</h1>}/>
          </Routes>
        </BrowserRouter>
     </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
