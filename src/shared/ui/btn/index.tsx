import React from 'react';
import {F} from "../../helpers/types/f.type";

import './style/index.scss'

type Props = {
    text: string,
    onClick: F<void, void>
}

const Button = ({onClick,text}:Props) => {
    return (
        <div className={'button'} onClick={() => onClick()}>
            {text}
        </div>
    );
};

export default Button;