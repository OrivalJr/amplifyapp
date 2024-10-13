import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  CondominioCreateForm 
 } from './ui-components';
 <CondominioCreateForm />

 import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
 import { studioTheme } from './ui-components';
 
 const updatedTheme = createTheme({
     // Extend the theme to update the button color
     name: "my-theme-updates", 
     tokens: {
         components: {
             button: {
                 primary: {
                     backgroundColor: {
                         value: "#b71c1c"
                     },
                 },
             },
         },
     },
 }, studioTheme)
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
     <ThemeProvider theme={updatedTheme}>
         <App />
     </ThemeProvider>
 );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo<CondominioCreateForm
    onSubmit={(fields) => {
        // Example function to trim all string inputs
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }}
/>" />
        <h1>Olá! Oi pessoal</h1>
      </header>
    </div>
  );
}

export default App;
