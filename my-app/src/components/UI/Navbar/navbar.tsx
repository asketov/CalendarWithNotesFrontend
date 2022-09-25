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
            <div className='link_first'><Link to="/login">Вход</Link></div>
            <div className='link'><Link to="/register">Регистрация</Link></div>
        </div>
    :
    <div className='navbar'>
            <div className='link_first'><Link to="/login" onClick={() => store.logout()}>Выйти</Link></div>
            <div className='link'><Link to="/calendar">Главная</Link></div>
  </div>
    );
    
};

export default observer(Navbar);