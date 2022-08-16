import { FC, MouseEventHandler, ReactNode } from 'react';
import './MyButton.scss';

interface MyButtonProps{
    children?: ReactNode;
    onClick?: (e: any) => void;
}

const MyButton: FC<MyButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={e => onClick(e)} className={'myBtn'}>
            {children}
        </button>
    );
};

export default MyButton;