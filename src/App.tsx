import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedButton from './components/tracker-wrapper/TrackerWrapperForButton';
import { TrackerWrapperForPage } from './components/tracker-wrapper/TrackerWrapperForPage';
import { AnaliticsContext, AnaliticsObject } from './analitics-context/AnaliticsContext';
import ReactGA from 'react-ga';
import GA4React from 'ga-4-react';
ReactGA.initialize('G-1B6E1Z43HE', { testMode: true, debug: true })
function App() {
  useEffect(() => {
    ReactGA.ga('send', 'pageview', '/');
    //ReactGA.pageview('/');
  }, [])
  const ga4react = new GA4React(
    'G-1B6E1Z43HE',

    );
    ga4react.initialize().then((ga4) => {
      ga4.pageview('/')
      ga4.gtag('event','pageview','/') // or your custom gtag event
    },(err) => {
      console.error(err)
    })
  return (

    <AnaliticsContext.Provider value={AnaliticsObject}>
      <div className="App">
        <WrappedButton
          action='TEST_ACTION'
          category='TESTS'
          label='TESTS'
          onClick={() => alert('main action')}
          title='test button'
        />
      </div>
    </AnaliticsContext.Provider>
  );
}

export const WrappedApp = TrackerWrapperForPage(App);
export default App;
