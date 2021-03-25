import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from './RouteHandler';
import React from 'react';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <RouteHandler/>
       </BrowserRouter>
    </div>
  );
}

export default App;
