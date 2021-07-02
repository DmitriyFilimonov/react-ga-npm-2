import React, { useEffect } from 'react';
import { PageChildProps, PageEventWrapper } from '../../types/types';

import {
    AnaliticsContext,
    IAnaliticsContext
} from '../../analitics-context/AnaliticsContext';

export function TrackerWrapperForPage(
    Children: React.FC,
) {
    const AdditionalFunctionality = ({ onRender }: Partial<IAnaliticsContext>) => {
        useEffect(() => {
            const currentUrl = window.location.pathname + window.location.search;
            onRender && onRender(currentUrl);
        }, [])
        return <></>
    }
    return (props?: PageChildProps & PageEventWrapper) => {
        return (
            <AnaliticsContext.Consumer>
                {({ onRender }) => {
                    return (
                        <>
                            <AdditionalFunctionality onRender={onRender} />
                            <Children />
                        </>
                    )
                }}
            </AnaliticsContext.Consumer>
        )
    }
};

