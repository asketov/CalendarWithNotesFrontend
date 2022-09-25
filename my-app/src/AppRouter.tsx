import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '.';
import { privateRoutes, publicRoutes } from './router/routes';

const AppRouter = () => {
    const{store} = useContext(Context);


    return (
        store.isAuth ?
       <Routes>
            {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )}
            <Route
            path="*"
            element={<Navigate to="/calendar"/>}
            />
       </Routes>
       :
       <Routes>
            {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )}
            <Route
            path="*"
            element={<Navigate to="/login"/>}
            />
        </Routes>
    );
};

export default observer(AppRouter);