import {
    ButtonChildProps,
    ClickEventWrapper
} from '../../types/types';

import { MyButton } from '../buttons/abstract-button/MyButton';
import { AnaliticsContext } from '../../analitics-context/AnaliticsContext';

function TrackerWrapperForButton(
    Children: React.FC<ButtonChildProps>,
) {
    return (props: ButtonChildProps & ClickEventWrapper) => {
        return (
            <AnaliticsContext.Consumer>
                {({ onClick }) => {
                    const newProps = {
                        ...props,
                        onClick: () => {
                            const {
                                action,
                                category,
                                label,
                            } = props;
                            onClick({
                                label,
                                category,
                                action,
                            });
                            props.onClick();
                        }
                    }
                    return (
                        <Children {...newProps} />)
                }}
            </AnaliticsContext.Consumer>)
    }
}
const WrappedButton = TrackerWrapperForButton(MyButton);
export default WrappedButton;

