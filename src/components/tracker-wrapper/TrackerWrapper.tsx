import React from 'react';
import { ReactGA } from '../../react-ga-dummy/react-ga-dummy';
import { GAEventType, TrackerEventType } from '../../types/types';
import { MyChildrenProps } from '../button/MyButton';



const TrackerWrapper = (
    dataForTrackers: TrackerEventType[],
    Children: React.FC<MyChildrenProps>) => {

    const clickHandlerFromTrackerContext = (dataForTrackers: TrackerEventType[]) => {
        dataForTrackers.map(typedEvent => {
            if (typedEvent.serviceName === 'google') {
                alert('google event')
            } else if (typedEvent.serviceName === 'yandex') {
                alert('yandex event')
            }
        })
    }

    return (props: MyChildrenProps) =>
        <div onClick={() => clickHandlerFromTrackerContext(dataForTrackers)}>
            <Children {...props} />
        </div>
}

export default TrackerWrapper;
