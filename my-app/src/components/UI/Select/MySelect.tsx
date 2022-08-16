import { FC, ReactNode } from 'react';
import './MySelect.scss';

interface MySelectComponentProps {
    defaultValue: string | number;
    onChange: (val: string) => void;
    options: number[] | string[];
    value: number | string;
}


const MySelect:FC<MySelectComponentProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <div className='mySelect'>
            <select className='select'
                value={defaultValue}
                onChange = {event => onChange(event.target.value)}
            >
                <option disabled value={value}>{defaultValue}</option>
                {options.map(option => 
                    <option key={option} value={option}>
                        {option}
                    </option>
                    )}
            </select>
        </div>
    );
};

export default MySelect;