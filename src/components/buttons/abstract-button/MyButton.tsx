import { ButtonChildrenProps } from "../../../types/types"

export const MyButton: React.FC<ButtonChildrenProps> = ({ title, onClick: myOnClick }) => {
    const innerOnClick = myOnClick
    return (
        <button
            onClick={() => innerOnClick()}
        >
            {title}
        </button>
    )
}