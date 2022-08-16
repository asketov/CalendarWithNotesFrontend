import React, { FC, ReactNode } from 'react';
import './MyModal.scss';

interface MyModalProps {
    visible: boolean;
    setVisible: (boolean) => void;
    children: ReactNode;
}

const MyModal: FC<MyModalProps> = ({children, visible, setVisible}) => {

    const rootClasses = ['myModal']

    if(visible){
        rootClasses.push('active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={(e) => {e.stopPropagation(); setVisible(false)}}>
            <div className={'Content'} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;

