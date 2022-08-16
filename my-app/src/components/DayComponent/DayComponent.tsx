import { FC, useState } from 'react';
import DateModel from '../../classes/Date';
import { checkDayIsNow, checkDayPassed } from '../../types/functions';
import { IDay } from '../../types/types';
import EventsComponent from '../EventsComponent/EventsComponent';
import './DayComponent.scss';

interface DayComponentProps {
    day: IDay;
    date: DateModel;
}

const DayComponent:FC<DayComponentProps> = ({day, date}) => {
    const dateNow = new Date(); 
    const rootClassesNumberDay = ['numberDay'];
    const[mouseOver, setMouseOver] = useState<boolean>(false);
    const onMouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseOver(true);
    }

    const onMouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseOver(false);
    }

    if(checkDayIsNow(dateNow, date))  rootClassesNumberDay.push('dayNow');
    return (
        <div onMouseOut={onMouseOutHandler} onMouseOver={onMouseOverHandler} style={{border: checkDayIsNow(dateNow, date) ? '1px solid wheat' : 'default'}}  className={'dayComponent'}>
            <div className='dayComponent_inside'>
                    <div style={{color: day.dayOfWeek === 'Sun' || day.dayOfWeek === 'Sat' ? 'red' : 'default' }} className={'dayOfWeek'}>{day.dayOfWeek}</div>
                    <div style={{color: checkDayPassed(date) ? 'gray' : 'default' }} className ={rootClassesNumberDay.join(' ')}>{day.numberDay}</div> 
            </div> 
            <EventsComponent mouseOver={mouseOver} date={date}></EventsComponent>
        </div>
    );
};

export default DayComponent;
