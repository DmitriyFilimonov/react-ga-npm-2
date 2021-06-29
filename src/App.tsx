import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WithEventOneWrappedButton } from './components/buttons/EventOneButton';
import { WithEventTwoWrappedButton } from './components/buttons/EventTwoButton';

function App() {
  return (
    <div className="App">
      <WithEventOneWrappedButton />
      <WithEventTwoWrappedButton />
    </div>
  );
}

export default App;
