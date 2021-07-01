import React, { useContext } from 'react';
import { ButtonChildrenProps, GAEventType, TrackerEvent } from '../../types/types';

import ReactGA from 'react-ga';
import { MyButton } from '../buttons/abstract-button/MyButton';
import { AnaliticsObject } from '../../analitics-context/AnaliticsContext';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const TrackerWrapperForButton = (
    Children: React.FC<ButtonChildrenProps>,
) => {

    const clickHandlerFromTrackerContext = (dataForTrackers: GAEventType) => {
        AnaliticsObject.customEvent(dataForTrackers)
    }
    return (props: ButtonChildrenProps & GAEventType) => {
        const newProps = {
            ...props,
            onClick: () => {
                const {
                    action,
                    category,
                    label,
                } = props;
                clickHandlerFromTrackerContext({
                    action,
                    category,
                    label,
                });
                props.onClick();
            }
        }
        return <Children {...newProps} />
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

