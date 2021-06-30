import React from 'react';
import { ButtonChildrenProps, GAEventType, TrackerEvent } from '../../types/types';

import ReactGA from 'react-ga';
import { MyButton } from '../buttons/abstract-button/MyButton';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const TrackerWrapperForButton = (
    //dataForTrackers: TrackerEvent[],
    Children: React.FC<ButtonChildrenProps>,
) => {

    const clickHandlerFromTrackerContext = (dataForTrackers: TrackerEvent[]) => {
        
    }

    return (props: ButtonChildrenProps & GAEventType) => {
        const newProps = {
            ...props,
            onClick: () => {
                props.onClick();
                (() => { })();
            }
        }
        return <Children {...newProps} />
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;