import React, { useContext, useState } from 'react';
import { Context } from '../..';
import MyButton from '../../components/UI/Button/MyButton';
import MyInput from '../../components/UI/Input/MyInput';

const Register = () => {
    const [email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const{store} = useContext(Context);
    const[statusMessage, setStatusMessage] = useState<string>('');

    async function register()
    {
        let success : boolean = await store.register(email,password);
        if(!success){
            setStatusMessage('Пользователь с таким логином уже существует');
        }
    }

    return (
        <div className='register'>
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
                <div>{statusMessage}</div>
                <MyButton onClick={() => register()}>Register</MyButton>
                {/*<MyButton onClick={() => store.register(email,password)}>Register</MyButton>*/}
            </div>
        </div>
    );
};

export default Register;