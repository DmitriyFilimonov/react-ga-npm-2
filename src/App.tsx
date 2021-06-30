import React from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedButton from './components/tracker-wrapper/TrackerWrapperForButton';

function App() {
  return (
    <div className="App">
      <WrappedButton
        action=''
        category=''
        label=''
        onClick={() => { }}
        title=''
      />
    </div>
  );
}

export default App;
