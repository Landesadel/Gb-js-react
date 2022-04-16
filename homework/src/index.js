import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {  Header, PrivateRoute, PublicRoute } from './components';
import { ProfilePage, ChatPage, GistsPage, SignUpPage, LoginPage } from './pages';
import { store, persistor } from './store';
import { auth } from './api/firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import './styles/App.css';

// const dispatch = useDispatch;

// const thunk = () => () => {
//   const unbind = onAuthStateChanged(auth, (user) => {
//     console.log('user', user);
//     if (user) {
//       dispatch(user)
//     } else {
//       dispatch(null)
//     }
//   })
//   unbind();
// };

const App = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header session={isAuth}/>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute isAuth={isAuth} to='/login'>
                  <h1> Home page</h1>
                </PrivateRoute>
                
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>  
              } 
            />
            <Route
              path="/chat/*"
              element=
              {
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute> 
              }
            />
            <Route
              path="/gists"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <GistsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<h1> Page is not found! /_(O_o )</h1>}/>
          </Routes>
        </BrowserRouter>
     </PersistGate>
    </Provider>
  )
};




ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
