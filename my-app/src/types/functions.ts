import { useMemo } from 'react';
import DateModel from '../classes/Date';
import { AmountDaysInMonth, DaysOfWeek, IDay, INote } from './types';

export function getInMonthAmountDays(numberMonth : number) : number {
    return AmountDaysInMonth.get(numberMonth);
} 

export function checkLeapYear(year: number) : boolean {

    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? true : false;

}

export function checkDayPassed(dateSelect: DateModel) : boolean
{
    let dateNow = new Date();
     return dateSelect.year < dateNow.getFullYear() || (dateSelect.month < dateNow.getMonth() && dateSelect.year <= dateNow.getFullYear()) 
    || (dateSelect.month == dateNow.getMonth() && dateSelect.year == dateNow.getFullYear() && dateSelect.day < dateNow.getDate());
}

export function checkDayIsNow(dateNow : Date, dateSelect: DateModel) : boolean
{
     return dateSelect.day == dateNow.getDate() && dateSelect.year === dateNow.getFullYear() && dateSelect.month === dateNow.getMonth();
}

export function sortEventsOnTime(events: INote[]){
    return [...events].sort((a,b) => a.time.localeCompare(b.time)); 
}