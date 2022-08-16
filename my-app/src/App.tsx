import {  useState } from 'react';
import './App.scss';
import { DaysOfWeek, Months, IDay, INote } from './types/types';
import MonthComponent from './components/MonthComponent/MonthComponent';
import MySelect from './components/UI/Select/MySelect';
import { useYears } from './hooks/useYears';
import { checkLeapYear, useFetchDays, getInMonthAmountDays } from './types/functions';
import Arrow, { ArrowVariants } from './components/UI/Arrow/ArrowLeft';




const App = () => {
  let nowDate = new Date(); 
  const month : IDay[] = []; 
  const [numberMonthInSelect, setNumberMonthInSelect] = useState<number>(nowDate.getMonth());
  const [numberYearInSelect, setNumberYearInSelect] = useState<number>(nowDate.getFullYear());
  const [Years] = useState<number[]>([]); 
  useYears(Years, nowDate.getFullYear());
  const [notes, setNotes] = useState<INote[]>([]);
  useFetchDays(numberYearInSelect, numberMonthInSelect, month);

  function decreaseNumberMonth(){
    if(numberMonthInSelect===0 && Years.includes(numberYearInSelect-1)) {setNumberYearInSelect(numberYearInSelect-1); setNumberMonthInSelect(11);}
    else setNumberMonthInSelect(numberMonthInSelect-1);
  }

  function increaseNumberMonth(){
    if(numberMonthInSelect===11 && Years.includes(numberYearInSelect+1)) {setNumberYearInSelect(numberYearInSelect+1); setNumberMonthInSelect(0);}
     else setNumberMonthInSelect(numberMonthInSelect+1);
  }

  return (
      <div className='calendar'>
        <div className='menu'>
            <MySelect value={numberMonthInSelect} onChange={selectedMonth => {setNumberMonthInSelect(Months.findIndex(month => month === selectedMonth))}} options={Months} defaultValue={Months[numberMonthInSelect]}></MySelect>
            <MySelect value={numberYearInSelect} onChange={selectedYear => {setNumberYearInSelect(Number(selectedYear))}} options={Years} defaultValue={numberYearInSelect}></MySelect>
            <Arrow onClick={() => decreaseNumberMonth()} variant={ArrowVariants.left}></Arrow>
            <Arrow onClick={() => increaseNumberMonth()} variant={ArrowVariants.right}></Arrow>
        </div>
        <div className='month'>
            <MonthComponent dateSelect={{month: numberMonthInSelect, year: numberYearInSelect}} month={{days: month}}></MonthComponent>
        </div>
      </div>
  );
};

export default App;