import React from 'react';
import {TimetableStore} from "../../../local-store/timetable/timtetable-store";
import {dateMonthRu} from "../data/date-month-ru";

type Props = {
    sch: TimetableStore
}

const MonthState = ({sch}:Props) => {
    return (
        <div className={'month-timetable__month'}>
            <span>{dateMonthRu(sch.timetable.activeDate.getMonth())}</span>
        </div>
    );
};

export default MonthState;