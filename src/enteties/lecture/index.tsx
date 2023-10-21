import React from 'react';
import {ILecture} from "../../shared/data/lectres-list";

type Props = {

} & ILecture

import './style/index.scss'
import UsersDate from "./ui/users-date";
import LectureInfo from "./ui/lecture-info";

const Lecture = (
    {
        id,
        timeEnd,
        members,
        date,
        theme,
        timeStart
    }:Props) => {
    return (
        <div className={'lecture'}>
            <UsersDate date={date} members={members}/>
            <LectureInfo timeStart={timeStart} timeEnd={timeEnd} theme={theme}/>
        </div>
    );
};

export default Lecture;