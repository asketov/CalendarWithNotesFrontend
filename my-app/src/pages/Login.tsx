import React, { FC, useContext, useState } from 'react';
import { Context } from '..';

const Login : FC = () => {
    const [email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const{store} = useContext(Context);

    return (
        <div>
            <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            ></input>
            <input
             type='text'
             value={password}
             placeholder='Password'
             onChange={e => setPassword(e.target.value)}
            ></input>
            <button onClick={() => store.login(email,password)}>Login</button>
            <button onClick={() => store.register(email,password)}>Register</button>
        </div>
    );
};

export default Login;