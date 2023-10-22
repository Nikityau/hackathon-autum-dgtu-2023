import React, {useState} from 'react';
import {F} from "../../../shared/helpers/types/f.type";
import Login from "./login";

type Props = {
    placeholder?: string
    onChange: F<string, any>
}

const Password = ({onChange, placeholder = 'Пароль'}:Props) => {
    const [type, setType] = useState<React.HTMLInputTypeAttribute>('password')

    return (
        <div className={'password'}>
            <Login placeholder={placeholder} type={type} onChange={onChange}/>
            <div className={'password__icon'} onClick={() => {
                setType(t =>  t == 'text' ? 'password' : 'text')
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M1.20057 7.78442C0.933139 7.2954 0.933144 6.70445 1.20058 6.21544C2.9 3.10803 6.20336 1 9.99997 1C13.7966 1 17.1 3.10809 18.7994 6.21558C19.0669 6.7046 19.0669 7.29555 18.7994 7.78456C17.1 10.892 13.7966 13 10 13C6.20336 13 2.89997 10.8919 1.20057 7.78442Z" stroke="#9C9C9C" strokeWidth="1.5"/>
                    <circle cx="10" cy="7" r="3" stroke="#9C9C9C" strokeWidth="1.5"/>
                </svg>
            </div>
        </div>
    );
};

export default Password;