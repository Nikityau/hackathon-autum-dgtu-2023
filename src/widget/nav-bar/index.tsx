import React from 'react';
import {navData} from "./data/nav-data";
import Nav from "../../enteties/nav";

import InnerNav from "../../enteties/inner-nav";

import fire_img from './assets/fire.svg'

import './style/index.scss'
import {observer} from "mobx-react-lite";
import {UserStore} from "../../local-store/user/user-store";

type Props = {
    user: UserStore
}

const NavBar = observer(({user}:Props) => {

    if(user.role == 'guest') {
        return (
            <div className={'nav-bar'}>
                {
                    navData.filter(d => d.title == 'Расписание').map(d => (
                        <Nav
                            key={d.id}
                            icon={d.icon}
                            title={d.title}
                            link={d.link}
                            infoCount={0}
                        />
                    ))
                }
            </div>
        )
    }

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
                        link: 'offer/man',
                        title: 'Специалиста'
                    },
                    {
                        link: 'offer/meet-theme',
                        title: 'Тему встречи'
                    }
                ]}
            />
        </div>
    );
});

export default NavBar;