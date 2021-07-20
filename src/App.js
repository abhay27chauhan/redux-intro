import React from 'react';
import './App.css';
import Ball from './component/Ball/Ball';
import Bat from './component/Bat/Bat'
import User from './component/User/User'

function App() {
  return (
    <div className="App">
      <Ball />
      <Bat />
      <User />
    </div>
  );
}

export default App;
