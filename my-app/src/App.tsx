import {  useContext, useEffect, useState } from 'react';
import './App.scss';
import { DaysOfWeek, Months, IDay, INote } from './types/types';
import MonthComponent from './components/MonthComponent/MonthComponent';
import MySelect from './components/UI/Select/MySelect';
import { useYears } from './hooks/useYears';
import { checkLeapYear, getInMonthAmountDays } from './types/functions';
import Arrow, { ArrowVariants } from './components/UI/Arrow/ArrowLeft';
import { useFetchDays } from './hooks/useFetchDays';
import Login from './pages/Login/Login';
import Calendar from './pages/Calendar/Calendar';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/types/IUser';
import Navbar from './components/UI/Navbar/navbar';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';


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



  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
  );
};

export default observer(App);