import React from 'react';
import {IUser} from "../data/user";

type Props = {

} & IUser

const User = ({id, avatar,name, surname, skill}:Props) => {
    return (
        <div className={'user'}>
            <div className={'user__avatar'}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div className={'user__info'}>
                <div className={'user__name'}>
                    <span>{name} {surname}</span>
                    <span>{skill}</span>
                </div>
                <div className={'user__btn'}>
                    <span>Удалить</span>
                </div>
            </div>
        </div>
    );
};

export default User;