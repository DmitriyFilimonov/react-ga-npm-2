import React from 'react';
import { GAEventType, TrackerEvent } from '../../types/types';
import { MyChildrenProps } from '../buttons/abstract-button/MyButton';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const TrackerWrapper = (
    dataForTrackers: TrackerEvent[],
    Children: React.FC<MyChildrenProps>) => {

    const clickHandlerFromTrackerContext = (dataForTrackers: TrackerEvent[]) => {
        dataForTrackers.map(typedEvent => {
            if (typedEvent.serviceName === 'google') {
                alert('google event')
            } else if (typedEvent.serviceName === 'yandex') {
                alert('yandex event')
            }
        })
    }

    return (props: MyChildrenProps) => {
        const newProps = {
            ...props,
            onClick: () => {
                props.onClick()
                clickHandlerFromTrackerContext(dataForTrackers)
            }
        }
        return <Children {...newProps} />
    }
}

export default TrackerWrapper;