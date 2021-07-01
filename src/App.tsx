import React from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedButton from './components/tracker-wrapper/TrackerWrapperForButton';
import { TrackerWrapperForPage } from './components/tracker-wrapper/TrackerWrapperForPage';

function App() {
  return (
    <div className="App">
      <WrappedButton
        action='TEST_ACTION'
        category='TESTS'
        label='TESTS'
        onClick={() => alert('main action')}
        title='test button'
      />
    </div>
  );
}

export const WrappedApp = TrackerWrapperForPage(App);
export default App;
