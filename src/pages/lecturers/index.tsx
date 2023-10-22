import React from 'react';
import Title from "../timetable/ui/title";
import LecturersList from "./ui/lecturers-list";

import './style/index.scss'
import {userStore} from "../../local-store/user/user-store";

const Lecturers = () => {
    return (
        <div className={'lectures-page'}>
            <Title title={"Лекторы"}/>
            <LecturersList user={userStore}/>
        </div>
    );
};

export default Lecturers;