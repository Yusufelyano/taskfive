import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import Detective from './Detective.js';


ReactDom.render(
   <React.StrictMode>
      <App />
      <Detective />
   </React.StrictMode>,
   document.getElementById('root')
)