import './App.css';
import WrappedButton from './components/tracker-wrapper/TrackerWrapperForButton';
import { TrackerWrapperForPage } from './components/tracker-wrapper/TrackerWrapperForPage';
import { AnaliticsContext, AnaliticsObject } from './analitics-context/AnaliticsContext';
import { Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Routes } from './router/Routes';

function App() {
  const history = useHistory();
  const [url, setUrl] = useState('/')
  return (
    <>
      <AnaliticsContext.Provider value={AnaliticsObject}>
        <div className="App">
          <WrappedButton
            action='event'
            category='click'
            label='TESTS'
            onClick={() => {
              url === '/' ? setUrl('/one') : setUrl('/');
              history.push(url)
            }}
            title='switch route'
          />
          <Switch>
            <Routes />
          </Switch>
        </div>
      </AnaliticsContext.Provider>
    </>
  );
}

export const WrappedApp = TrackerWrapperForPage(App);
export default App;
