export interface MyChildrenProps {
    title: string;
    onClick: Function;
}

export const MyButton: React.FC<MyChildrenProps> = ({ title, onClick: myOnClick }) => {
    const innerOnClick = myOnClick
    return (
        <button
            onClick={() => innerOnClick()}
        >
            {title}
        </button>
    )
}