import { ClickEventWrapper } from '../../types/types';

import { MyButton } from '../buttons/abstract-button/MyButton';
import { useCallback, useContext } from 'react';
import { AnaliticsContext } from '../../analitics-context/AnaliticsContext';
import { useMemo } from 'react';

type OnClick = { onClick: Function };

function TrackerWrapperForButton<T extends OnClick>(
    Children: React.FC<T>,
) {
    return (props: T & ClickEventWrapper) => {
        const {
            action,
            category,
            label,
            onClick: onClickFromProps
        } = props;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const context = useContext(AnaliticsContext);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        //const { analiticsInstance } = useMemo(() => context, [context.id]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const wrapperOnClick = useCallback(function () {
            console.log({...context}) // debug
            context.tryCallEvents({
                label,
                category,
                action,
            });
            onClickFromProps.apply(null, arguments);
        }, [onClickFromProps]);
        const newProps: T = {
            ...props,
            onClick: wrapperOnClick
        };
        return (
            <Children  {...newProps} />
        )
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

