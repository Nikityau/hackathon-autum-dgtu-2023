import React, {useState} from 'react';
import {F} from "../../../shared/helpers/types/f.type";

type Props = {
    placeholder?: string
    onChange: F<string, void>,
    type?: React.HTMLInputTypeAttribute
}

const Login = ({onChange, placeholder = 'Логин', type = 'text'}: Props) => {
    const [v, setV] = useState<string>("")

    return (
        <input
            className={'input-login'}
            placeholder={placeholder}
            value={v}
            type={type}
            onChange={(e) => {
                setV(e.target.value)
                onChange(e.target.value)
            }}
        />
    );
};

export default Login;