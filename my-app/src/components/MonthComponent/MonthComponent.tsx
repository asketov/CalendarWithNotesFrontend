import React, { FC, useEffect, useState } from 'react';
import { AmountDaysInMonth, IDay, IMonth } from '../../types/types';
import DayComponent from '../DayComponent/DayComponent';
import './MonthComponent.scss';
import DateModel from '../../classes/Date';

interface DaysListProps {
    month: IMonth;
    dateSelect: {month: number, year: number};
}


const MonthComponent:FC<DaysListProps> = ({month, dateSelect}) => {
    return (
           <div className='MonthComponent'>
                {month.days.map(day => <DayComponent date={new DateModel(dateSelect.year, dateSelect.month, day.numberDay)} day={day} key={Number(dateSelect.month + String(dateSelect.year) + day.numberDay)}></DayComponent>)}
           </div> 
    );
};


export default MonthComponent;

