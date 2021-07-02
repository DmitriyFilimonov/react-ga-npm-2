import React, { useEffect } from 'react';
import { PageChildProps, PageEventWrapper } from '../../types/types';

import {
    AnaliticsContext,
    IAnaliticsContext
} from '../../analitics-context/AnaliticsContext';
import { useContext } from 'react';

export function TrackerWrapperForPage(
    Children: React.FC,
) {
    return (props?: PageChildProps & PageEventWrapper) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const context = useContext(AnaliticsContext);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const currentUrl = window.location.pathname + window.location.search;
            context.onRender(currentUrl)
        }, [])
        return (
            <Children />
        )
    }
};

