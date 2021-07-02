import {
    ButtonChildProps,
    ClickEventWrapper
} from '../../types/types';

import { MyButton } from '../buttons/abstract-button/MyButton';
import { AnaliticsContext } from '../../analitics-context/AnaliticsContext';
import { useContext } from 'react';

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
        const { onClick: onClickFromContext } = useContext(AnaliticsContext);
        const onClick = () => {
            onClickFromContext({
                label,
                category,
                action,
            });
            onClickFromProps.apply(arguments);
        }
        return (
            <Children {...props} onClick={onClick} />
        )
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

