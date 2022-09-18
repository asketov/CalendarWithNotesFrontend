import {  useState } from 'react';
import './App.scss';
import { DaysOfWeek, Months, IDay, INote } from './types/types';
import MonthComponent from './components/MonthComponent/MonthComponent';
import MySelect from './components/UI/Select/MySelect';
import { useYears } from './hooks/useYears';
import { checkLeapYear, getInMonthAmountDays } from './types/functions';
import Arrow, { ArrowVariants } from './components/UI/Arrow/ArrowLeft';
import { useFetchDays } from './hooks/useFetchDays';
import Login from './pages/Login';


const App = () => {
  

  return (
      <div>
        <Login></Login>
      </div>
  );
};

export default App;