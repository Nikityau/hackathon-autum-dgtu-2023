import React from 'react';

import MonthTimetable from "../month-timetable";
import {sch} from "../../local-store/timetable/timtetable-store";
import LecturesProvider from "./provider/lectures-provider";
import DayLectureProvider from "./provider/day-lecture.provider";

import './style/index.scss'
import ModerStatProvider from "./provider/moder-stat.provider";
import {userStore} from "../../local-store/user/user-store";

const TimetableBar = () => {
    return (
        <div className={'timetable-bar'}>
            <div className={'timetable-bar__container'}>
                <MonthTimetable sch={sch}/>
                <LecturesProvider/>
                <DayLectureProvider/>
                <ModerStatProvider user={userStore}/>
            </div>
        </div>
    );
};

export default TimetableBar;