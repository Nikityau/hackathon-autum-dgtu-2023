import React from 'react';

import './style/index.scss'
import {observer} from "mobx-react-lite";
import {UserStore} from "../../local-store/user/user-store";

type Props = {
    user: UserStore
    image: string,
    userName: string,
    userSurname: string
}

const UserInfo = observer(({userSurname, userName, image, user}:Props) => {
    return (
        <div className={'user-info'}>
            <div className={'user-info__avatar'}>
                <img src={image} alt={'avatar'}/>
            </div>
            <div className={'user-info__data'}>
                <div className={'user-info__wrapper'}>
                    <span>{user.surname}</span>
                    <span>{user.name}</span>
                </div>
                <div className={'user-info__role'}>
                    <span>{user.role}</span>
                </div>
            </div>
        </div>
    );
});

export default UserInfo;