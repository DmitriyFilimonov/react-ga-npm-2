import React, { useContext } from 'react';
import { ButtonChildrenProps, ClickEventWrapper, TrackerEvent } from '../../types/types';

import ReactGA from 'react-ga';
import { MyButton } from '../buttons/abstract-button/MyButton';
import { AnaliticsObject } from '../../analitics-context/AnaliticsContext';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

function TrackerWrapperForButton(
    Children: React.FC<ButtonChildrenProps>,
) {
    return (props: ButtonChildrenProps & ClickEventWrapper) => {
        const newProps = {
            ...props,
            onClick: () => {
                const {
                    action,
                    category,
                    label,
                } = props;
                AnaliticsObject.onClick({
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

