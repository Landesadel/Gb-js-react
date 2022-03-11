import React from 'react';
import RendMessages from './components/RendMessages';
import MessageForm from './components/MessageForm';
import './styles/App.css';

function App() {

  return (
    <div className='App'>
      <RendMessages/>
      <hr />
      <MessageForm/>
    </div>
  );
 
}

export default App;
