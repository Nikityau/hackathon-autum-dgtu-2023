import React from 'react';

import UserInfo from "../../enteties/user-info";
import NavBar from "../nav-bar";

import user_img from './assets/user.png'

import './style/index.scss'
import ExitBtn from "../../feature/exit-btn";
import {Link} from "react-router-dom";
import {userStore} from "../../local-store/user/user-store";

const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <div className={'side-bar__container'}>
                <UserInfo
                    user={userStore}
                    image={user_img}
                    userSurname={'Андреева'}
                    userName={'Александра'}
                />
                <NavBar user={userStore}/>
                <Link to={'/oggetto/well-being-platform/auth'}>
                    <ExitBtn
                        classNames={'exit-btn_down'}
                        icon={''}
                        title={'Выйти'}
                    />
                </Link>
            </div>
        </div>
    );
};

export default SideBar;