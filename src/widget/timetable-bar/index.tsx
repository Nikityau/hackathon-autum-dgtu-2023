import React from 'react';

import MonthTimetable from "../month-timetable";
import {sch} from "../../local-store/timetable/timtetable-store";
import LecturesProvider from "./provider/lectures-provider";

import './style/index.scss'

const TimetableBar = () => {
    return (
        <div className={'timetable-bar'}>
            <div className={'timetable-bar__container'}>
                <MonthTimetable sch={sch}/>
                <LecturesProvider/>
            </div>
        </div>
    );
};

export default TimetableBar;