import React from 'react';
import {NavLink} from "react-router-dom";
import cn from "classnames";

import './style/index.scss'

export type NavDataProps = {
    icon: string,
    title: string,
    link: string,
    infoCount: number
}

const Nav = (
    {
        icon,
        link,
        infoCount,
        title
    }:NavDataProps) => {
    return (
        <NavLink to={link} className={({isPending, isActive}) => cn(
            isActive && "nav-link_active"
        )}>
            <div className={"nav-link"}>
                <div className={'nav-link__icon'}>
                    <img src={icon} alt={'icon'}/>
                </div>
                <div className={'nav-link__link'}>
                    <span>{title}</span>
                </div>
                {
                    infoCount > 0 &&
                    <div className={'nav-link__info-count'}>
                        <span>{infoCount}</span>
                    </div>
                }
            </div>
        </NavLink>
    );
};

export default Nav;