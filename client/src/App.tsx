import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home';

function App() {
  console.log('PUBLIC_URL: ' + process.env.PUBLIC_URL);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
