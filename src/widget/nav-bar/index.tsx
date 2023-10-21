import React from 'react';
import {navData} from "./data/nav-data";
import Nav from "../../enteties/nav";

import InnerNav from "../../enteties/inner-nav";

import fire_img from './assets/fire.svg'

import './style/index.scss'

const NavBar = () => {
    return (
        <div className={'nav-bar'}>
            {
                navData.map(d => (
                    <Nav
                        key={d.id}
                        icon={d.icon}
                        title={d.title}
                        link={d.link}
                        infoCount={d.infoCount}
                    />
                ))
            }
            <InnerNav
                icon={fire_img}
                title={'Предложить'}
                links={[
                    {
                        link: 'specialists',
                        title: 'Специалиста'
                    },
                    {
                        link: 'meet-theme',
                        title: 'Тему встречи'
                    }
                ]}
            />
        </div>
    );
};

export default NavBar;