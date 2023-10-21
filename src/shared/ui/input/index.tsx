import React from 'react';
import {F} from "../../helpers/types/f.type";

import './style/index.scss'

type Props = {
    label: string,
    onChange: F<string, void>
}

const Input = ({label, onChange}:Props) => {
    return (
        <div className={'input-field'}>
            <p>{label}</p>
            <input onChange={e => onChange(e.target.value)}/>
        </div>
    );
};

export default Input;