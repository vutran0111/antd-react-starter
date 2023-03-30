import React from 'react';
import Routing from '@/routes';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
