import { ButtonChildProps } from "../../../types/types"

export const MyButton: React.FC<ButtonChildProps> = ({ title, onClick: myOnClick }) => {
    const innerOnClick = () => {
        myOnClick('I am button');
    }
    return (
        <button
            onClick={innerOnClick}
        >
            {title}
        </button>
    )
}