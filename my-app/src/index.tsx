import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { injectStore } from './Api/AuthInterceptors';
import App from './App';
import AuthStore from './store/AuthStore';


const store = new AuthStore();
injectStore(store);

export const Context = createContext({
  store
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{store}}>
    <App/>
  </Context.Provider>
);

