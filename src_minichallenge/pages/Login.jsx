import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const Navigate = useNavigate();

    const handleeLogin = () => {
        Navigate('/finance');
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleeLogin}>Login</button>
        </div>
    );
}