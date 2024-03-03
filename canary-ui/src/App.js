import './App.css';
import React, { useState } from 'react';
import Hero from './comps/Hero';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [emailMessage, setEmailMessage] = useState('');

  const emailProps = {
    userEmail,
    setUserEmail,
    emails,
    setEmails,
    emailMessage,
    setEmailMessage
  }

  return (
    <ThemeProvider className="App" theme={darkTheme}>
      <Hero emailProps={emailProps}/>
    </ThemeProvider>
  );
}

export default App;
