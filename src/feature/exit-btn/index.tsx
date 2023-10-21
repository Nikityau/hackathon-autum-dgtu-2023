import React from 'react';
import cn from "classnames";

import './style/index.scss'

type Props = {
    classNames?: string | string[]
    icon: string,
    title: string
}

const ExitBtn = ({classNames, title, icon}:Props) => {
    return (
        <div className={cn(
            'exit-btn',
            classNames
        )}>
            <div className={'exit-btn__icon'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                    <path d="M7.85529 7.80005L7.85529 5.50007C7.85529 3.29093 9.64615 1.50007 11.8553 1.50007L17.625 1.50007C19.8342 1.50007 21.625 3.29093 21.625 5.50007L21.625 18.5C21.625 20.7091 19.8342 22.5 17.625 22.5L11.8553 22.5C9.64615 22.5 7.85529 20.7091 7.85529 18.5L7.85529 16.2" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4.67757 8.8501L2.21636 11.2899C1.82171 11.6811 1.82171 12.3191 2.21636 12.7103L4.67757 15.1501" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2.55913 12L15.2697 12" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={'exit-btn__text'}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default ExitBtn;