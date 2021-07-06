import {
    ButtonChildProps,
    ClickEventWrapper
} from '../../types/types';

import { MyButton } from '../buttons/abstract-button/MyButton';
import { useContext } from 'react';
import { AnaliticsContext } from '../../analitics-context/AnaliticsContext';
import { useMemo } from 'react';
import { myStore } from '../../analitics-context/ReduxAnalog';

function TrackerWrapperForButton(
    Children: React.FC<ButtonChildProps>,
) {
    return ({
        action,
        category,
        label,
        onClick: onClickFromProps,
        ...props
    }: ButtonChildProps & ClickEventWrapper) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const context = useContext(AnaliticsContext);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ga4React = useMemo(() => context.ga4React, [context.isInitialized]);
        function onClick() {
            console.log(ga4React)
            ga4React?.event(
                label,
                category,
                action,
            );
            onClickFromProps.apply(null, arguments);
        }
        return (
            <Children {...props} onClick={onClick} />
        )
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

