import Calendar from "../pages/Calendar/Calendar";
import Login from "../pages/Login/Login";


export const privateRoutes = [
    {path: '/Calendar', component: Calendar, exact: true},
    
]

export const publicRoutes = [
    {path: '/Login', component: Login, exact: true},
]