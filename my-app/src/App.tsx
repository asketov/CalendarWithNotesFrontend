import {  useContext, useEffect, useState } from 'react';
import './App.scss';
import { DaysOfWeek, Months, IDay, INote } from './types/types';
import MonthComponent from './components/MonthComponent/MonthComponent';
import MySelect from './components/UI/Select/MySelect';
import { useYears } from './hooks/useYears';
import { checkLeapYear, getInMonthAmountDays } from './types/functions';
import Arrow, { ArrowVariants } from './components/UI/Arrow/ArrowLeft';
import { useFetchDays } from './hooks/useFetchDays';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/types/IUser';


const App = () => {
  const {store} = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth();
    }
  },[])

  if(!localStorage.getItem('token')) {
    store.logout();
  }

  if(!store.isAuth){
    return(
        <Login></Login>
    )
  }

  return (
    <div>
      <h1>{store.isAuth ? 'Пользователь авторизован' + store.user.email : ''}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <Calendar></Calendar>
    </div>
  );
};

export default observer(App);