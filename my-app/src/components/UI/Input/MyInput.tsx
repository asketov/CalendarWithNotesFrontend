import React, { FC } from 'react';
import { StringMappingType } from 'typescript';
import './MyInput.scss';

interface MyInputProps {
    value?: string;
    required?: boolean;
    onChange?: (e: any) => void;
    type?: string;
    placeholder?: string;
}

const MyInput = React.forwardRef<HTMLInputElement, React.PropsWithChildren<MyInputProps>>((props,ref) => {
    return (
        <input ref={ref} className={'MyInput'} {...props} />
    );
});

export default MyInput;