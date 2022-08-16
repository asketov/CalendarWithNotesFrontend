import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './ArrowLeft.scss';
import { FC } from 'react';

export enum ArrowVariants{
    left = 'left',
    right = 'right'
}

interface ArrowLeftProps {
    variant: ArrowVariants;
    onClick : () => void;
}

const ArrowLeft:FC<ArrowLeftProps> = ({variant, onClick}) => {
    return (
        <div>
            <FontAwesomeIcon onClick={() => onClick()} className={'arrow ' + variant} icon={faAngleLeft}/>
        </div>
    );
};

export default ArrowLeft;