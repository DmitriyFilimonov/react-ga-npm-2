import './App.css';
import WrappedButton from './components/tracker-wrapper/TrackerWrapperForButton';
import { TrackerWrapperForPage } from './components/tracker-wrapper/TrackerWrapperForPage';
import { Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Routes } from './router/Routes';

function App() {
  const history = useHistory();
  const [url, setUrl] = useState('/');

  const callBack = (param: string) => {
    url === '/' ? setUrl('/one') : setUrl('/');
    history.push(url);
    alert(param);
  }

  return (
    <>
      <div className="App">
        <WrappedButton
          action='event'
          category='click'
          label='TESTS'
          onClick={callBack}
          title='switch route'
        />
        <Switch>
          <Routes />
        </Switch>
      </div>
    </>
  );
}

export const WrappedApp = TrackerWrapperForPage(App, '/root-url');
export default App;
