import React from 'react';

import {observer} from "mobx-react-lite";
import {TimetableStore} from "../../local-store/timetable/timtetable-store";
import MonthState from "./ui/month-state";
import Dates from "./ui/dates";

import DateNum from "./ui/date-num";
import {nanoid} from "nanoid";

import './style/index.scss'
import {Link} from "react-router-dom";

type Props = {
    sch: TimetableStore
} & React.PropsWithChildren

const MonthTimetable = observer(({sch, children}: Props) => {
    return (
        <div className={'month-timetable'}>
            <MonthState sch={sch}/>
            <Dates sch={sch}>
                {
                    sch.month.map(d => (
                        <Link
                            key={nanoid()}
                            to={`/oggetto/well-being-platform/timetable/${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`}>
                            <DateNum  date={d.getDate()}/>
                        </Link>
                    ))
                }
            </Dates>
        </div>
    );
});

export default MonthTimetable;