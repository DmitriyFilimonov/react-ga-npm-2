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
    return (props: ButtonChildProps & ClickEventWrapper) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { onClick: onClickFromContext } = useContext(AnaliticsContext);
        const newProps = {
            ...props,
            onClick: () => {
                const {
                    action,
                    category,
                    label,
                } = props;
                onClickFromContext({
                    label,
                    category,
                    action,
                });
                props.onClick();
            }
        }
        return (
            <Children {...newProps} />
        )
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

