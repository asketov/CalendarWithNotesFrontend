import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import MyButton from '../../components/UI/Button/MyButton';
import MyInput from '../../components/UI/Input/MyInput';
import './Login.scss';

const Login : FC = () => {
    const [email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const{store} = useContext(Context);

    return (
        <div className='login'>
            <div className='loginForm'>
                <div><MyInput
                type='text'
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                ></MyInput></div>
                <div><MyInput
                type='password'
                value={password}
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                ></MyInput></div>
                <MyButton onClick={() => store.login(email,password)}>Login</MyButton>
                {/*<MyButton onClick={() => store.register(email,password)}>Register</MyButton>*/}
            </div>
        </div>
    );
};

export default observer(Login);