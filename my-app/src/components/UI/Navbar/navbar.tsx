import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../..';
import MyButton from '../Button/MyButton';
import { observer } from 'mobx-react-lite';
import './navbar.scss';

const Navbar = () => {
    const{store} = useContext(Context);
    return(
    !store.isAuth ?
    
        <div className='navbar'>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    :
    <div className='navbar'>
            <Link to="/login" onClick={() => store.logout()}>Выйти</Link>
            <Link to="/calendar">Главная</Link>
  </div>
    );
    
};

export default observer(Navbar);