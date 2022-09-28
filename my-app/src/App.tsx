import {  useContext, useEffect } from 'react';
import './App.scss';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import Navbar from './components/UI/Navbar/navbar';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const {store} = useContext(Context);

  useEffect(() => {
      store.checkAuth();
  },[])


  if(store.isLoading){
    return(
      <div></div>
    )
  }


  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
  );
};

export default observer(App);