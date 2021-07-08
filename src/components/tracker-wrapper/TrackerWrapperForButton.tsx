import {
    ButtonChildProps,
    ClickEventWrapper
} from '../../types/types';

import { MyButton } from '../buttons/abstract-button/MyButton';
import { useCallback, useContext, useEffect } from 'react';
import { AnaliticsContext } from '../../analitics-context/AnaliticsContext';
import { useMemo } from 'react';

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
        //const { analiticsInstance } = useMemo(() => context, [context.id]);
        console.log(context.isInitialized);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const wrapperOnClick = useCallback(function () {
            console.log(context.analiticsInstance)
            context.analiticsInstance?.event(
                label,
                category,
                action,
            );
            onClickFromProps.apply(null, arguments);
        }, [onClickFromProps])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => { console.log(context.id) }, [context.id])
        return (
            <Children {...props} onClick={wrapperOnClick} />
        )
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

