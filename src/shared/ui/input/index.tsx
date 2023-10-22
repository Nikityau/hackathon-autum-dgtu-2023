import React, {useState} from 'react';
import {F} from "../../helpers/types/f.type";

import './style/index.scss'

type Props = {
    label: string,
    onChange: F<string, void>,
    value?: string,
    type?: React.HTMLInputTypeAttribute
}

const Input = ({label, onChange, value, type = 'text'}:Props) => {

    const [v, setV] = useState<string>(value)

    return (
        <div className={'input-field'}>
            <p>{label}</p>
            <input type={type} value={v} onChange={e => {
                onChange(e.target.value)
                setV(e.target.value)
            }}/>
        </div>
    );
};

export default Input;