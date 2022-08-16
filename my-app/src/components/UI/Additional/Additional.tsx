import React, { useMemo } from 'react';
import './Additional.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface AdditionalProps{
    setModal: (boolean) => void;
    visible: boolean;
}


const Additional = ({setModal, visible}) => {
    return (
        <div onClick={visible ? setModal : null} className='additional'>
            <FontAwesomeIcon className={'button'} icon={faBars}/>
        </div>
    );
};

export default Additional;