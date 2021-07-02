import { ButtonChildProps } from "../../../types/types"

export const MyButton: React.FC<ButtonChildProps> = ({ title, onClick: myOnClick }) => {
    const innerOnClick = myOnClick
    return (
        <button
            onClick={innerOnClick}
        >
            {title}
        </button>
    )
}