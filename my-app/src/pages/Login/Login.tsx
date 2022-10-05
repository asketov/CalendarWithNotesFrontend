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
    const[statusMessage, setStatusMessage] = useState<string>('');

    async function login()
    {
        let success : boolean = await store.login(email,password);
        if(!success) setStatusMessage('Логин или пароль неверны');
    }

    return (
        <div className='login'>
            <div className='loginForm'>
                <div><MyInput
                type='text'
                value={email}
                placeholder='Email'
                onChange={e => {setEmail(e.target.value); setStatusMessage('')}}
                ></MyInput></div>
                <div><MyInput
                type='password'
                value={password}
                placeholder='Password'
                onChange={e => {setPassword(e.target.value); setStatusMessage('')}}
                ></MyInput></div>
                <div style={{color: 'red', textAlign:'center'}}>{statusMessage}</div>
                <MyButton onClick={() => login()}>Login</MyButton>
                {/*<MyButton onClick={() => store.register(email,password)}>Register</MyButton>*/}
            </div>
        </div>
    );
};

export default Login;