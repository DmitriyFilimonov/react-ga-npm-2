import React, { useContext, useEffect } from 'react';
import { PageEventWrapper } from '../../types/types';
import ReactGA from 'react-ga';

import { AnaliticsContext, IAnaliticsContext, onRenderFunction } from '../../analitics-context/AnaliticsContext';


export function TrackerWrapperForPage(
    Children: React.FC,
) {
    const AdditionalFunctionality = ({ onRender }: Partial<IAnaliticsContext>) => {
        useEffect(() => {
            // ReactGA.ga('send', 'pageview', '/mypage');
            // ReactGA.pageview('/');
            const currentUrl = window.location.pathname + window.location.search;
            onRender && onRender(currentUrl);
        }, [])
        return <></>
    }
    return (props?: PageEventWrapper) => {
        return (
            <>
                <AnaliticsContext.Consumer>
                    {({ history, onClick, onRender }) => (
                        <AdditionalFunctionality
                            onRender={onRender}
                        />
                    )}
                </AnaliticsContext.Consumer>
                <Children />
            </>
        )
    }
};

