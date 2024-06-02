import { type FC } from 'react'

const Button: FC<{ callback: () => void }> = ({ callback }) => {
    const handleButtonClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        callback();
    };

    return (
        <button type="button" onClick={handleButtonClick}>
            get random user
        </button>
    );
}

export default Button