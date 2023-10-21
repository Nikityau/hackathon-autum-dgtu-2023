import React from 'react';

import './style/index.scss'

type Props = {
    image: string,
    userName: string,
    userSurname: string
}

const UserInfo = ({userSurname, userName, image}:Props) => {
    return (
        <div className={'user-info'}>
            <div className={'user-info__avatar'}>
                <img src={image} alt={'avatar'}/>
            </div>
            <div className={'user-info__data'}>
               <div className={'user-info__wrapper'}>
                   <span>{userSurname}</span>
                   <span>{userName}</span>
               </div>
               <div className={'user-info__role'}>
                   <span>user</span>
               </div>
            </div>
        </div>
    );
};

export default UserInfo;