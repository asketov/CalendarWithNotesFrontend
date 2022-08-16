import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Plus.scss';
import React, { FC } from 'react';

interface PlusProps{
    setModal: (boolean) => void;
    dayPassed: boolean;
}

const Plus:FC<PlusProps> = ({setModal, dayPassed}) => {
    return (
        <div onClick={dayPassed ? null : () => setModal(true)} className='add'>
            <FontAwesomeIcon className='plus' icon={faPlusSquare}></FontAwesomeIcon>
        </div>
    );
};

export default Plus;