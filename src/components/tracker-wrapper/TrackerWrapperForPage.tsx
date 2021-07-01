import React, { ReactNode, useContext, useEffect } from 'react';
import { ButtonChildrenProps, PageEventWrapper, TrackerEvent } from '../../types/types';

import ReactGA from 'react-ga';
import { MyButton } from '../buttons/abstract-button/MyButton';
import { AnaliticsObject } from '../../analitics-context/AnaliticsContext';
ReactGA.initialize('UA-000000-01');
//ReactGA.pageview(window.location.pathname + window.location.search);

export function TrackerWrapperForPage(
    Children: React.FC,
) {
    const Wrapper = () => {
        useEffect(() => {
            AnaliticsObject.onRender(window.location.pathname + window.location.search)
        }, [])
        return <></>
    }
    return (props?: PageEventWrapper) => {
        return (
            <>
                <Wrapper />
                <Children />
            </>
        )
    }
}
//const WrappedPage = TrackerWrapperForPage(Wrapper);
//export default WrappedPage;

