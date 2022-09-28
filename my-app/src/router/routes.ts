import Calendar from "../pages/Calendar/Calendar";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const privateRoutes = [
    {path: '/Calendar', component: Calendar, exact: true},
    
]

export const publicRoutes = [
    {path: '/Login', component: Login, exact: true},
    {path: '/Register', component: Register, exact: true}
]