import React from 'react';
import './App.scss'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import useLocalStorage from './Hooks/useLocalStorage';
import { ContactsProvider } from './Contexts/ContactsProvider';
import { ConversationsProvider } from './Contexts/ConversationProvider';
import { SocketProvider } from './Contexts/SocketProvider';


function App() {

  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <div className='App'>
      {id ? dashboard : <Login onIdSubmit = {setId} />}
    </div>
  );
}

// resume: https://youtu.be/tBr-PybP_9c?t=5077

export default App;
