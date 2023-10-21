import React from 'react';
import Title from "../timetable/ui/title";
import LecturersList from "./ui/lecturers-list";

import './style/index.scss'

const Lecturers = () => {
    return (
        <div className={'lectures-page'}>
            <Title title={"Лекторы"}/>
            <LecturersList/>
        </div>
    );
};

export default Lecturers;