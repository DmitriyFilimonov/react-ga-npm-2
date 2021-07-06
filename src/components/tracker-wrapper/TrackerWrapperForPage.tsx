import React, { useEffect, useMemo } from 'react';
import { PageChildProps, PageEventWrapper } from '../../types/types';

import {
    AnaliticsContext,
    IAnaliticsContext
} from '../../analitics-context/AnaliticsContext';
import { useContext } from 'react';

export function TrackerWrapperForPage(
    Children: React.FC,
    url: string,
) {
    return (props?: PageChildProps & PageEventWrapper) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const context = useContext(AnaliticsContext);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ga4React = useMemo(() => context.ga4React, [context.isInitialized]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            context.ga4React?.pageview(url);
        }, [])
        return (
            <Children />
        )
    }
};

