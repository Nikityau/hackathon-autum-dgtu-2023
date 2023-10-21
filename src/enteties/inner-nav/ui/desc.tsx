import React from 'react';
import {F} from "../../../shared/helpers/types/f.type";
import cn from "classnames";

type Props = {
    icon: string,
    title: string,
    is: boolean
    onChange: F<void, void>
}

const Desc = ({icon,title, onChange, is}:Props) => {
    return (
        <div className={'inner-nav__descr'} onClick={() => onChange()}>
            <div className={'inner-nav__wrapper'}>
                <div className={'inner-nav__icon'}>
                    <img src={icon} alt={'icon'}/>
                </div>
                <div className={'inner-nav__text'}>
                    <span>{title}</span>
                </div>
            </div>
            <div className={cn(
                'inner-nav__arrow',
                is && 'inner-nav__arrow_open'
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                    <path d="M1.83337 8.5L9.21909 2.16939C9.66848 1.7842 10.3316 1.7842 10.781 2.16939L18.1667 8.5" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Desc;