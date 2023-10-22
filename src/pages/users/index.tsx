import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../shared/ui/btn";
import {usersData} from "./data/user";
import User from "./ui/user";

import './style/index.scss'
import Title from "../timetable/ui/title";

const UsersPage = () => {
    return (
        <div className={'users-page'}>
            <Title title={'Пользователи'}/>
            <div className={'users-page__list'}>
                {
                    usersData.map(u => (
                        <User
                            key={u.id}
                            id={u.id}
                            avatar={u.avatar}
                            skill={u.skill}
                            name={u.name}
                            surname={u.surname}
                        />
                    ))
                }
            </div>

            <Link to={'add'}>
                <Button text={'Добавить пользователя'} onClick={() => {
                }}/>
            </Link>
        </div>
    );
};

export default UsersPage;