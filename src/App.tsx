import './App.css';
import WrappedButton from './components/tracker-wrapper/TrackerWrapperForButton';
import { TrackerWrapperForPage } from './components/tracker-wrapper/TrackerWrapperForPage';
import { Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Routes } from './router/Routes';
import { getGoogleIdFromStoreDummy } from './getGoogleIdFromStoreDummy';
import { myStore } from './analitics-context/ReduxAnalog';
import { AnaliticsContext } from './analitics-context/AnaliticsContext';

function App() {
  const history = useHistory();
  const [url, setUrl] = useState('/');

  const [storeInState, setStoreInState] = useState(myStore);

  const googleId = getGoogleIdFromStoreDummy();

  useEffect(() => {
    //!myStore.isInitialized && setStoreInState({ ...myStore.acceptGoogleId(googleId) });
    !myStore.isInitialized && myStore.acceptGoogleId(googleId);
  }, [myStore.isInitialized])

  const callBack = (param: string) => {
    url === '/' ? setUrl('/one') : setUrl('/');
    history.push(url);
    alert(param);
  }

  //if (!myStore.isInitialized) return <></>;

  return (
    <>
      {/* <AnaliticsContext.Provider value={myStore}> если закоментировать - тоже работает */}
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
      {/* </AnaliticsContext.Provider> если закоментировать - тоже работает */}
    </>
  );
}

export const WrappedApp = TrackerWrapperForPage(App, '/root-url');
export default App;
