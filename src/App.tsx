import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WrappedButton } from './components/button/MyButton';

function App() {
  return (
    <div className="App">
      <WrappedButton
        title={'title'}
        onClick={()=>alert('action')}
      />
    </div>
  );
}

export default App;
