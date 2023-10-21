import React from 'react';
import {nanoid} from "nanoid";
import {observer} from "mobx-react-lite";

import DateNum from "./date-num";
import {TimetableStore} from "../../../local-store/timetable/timtetable-store";
import {useMonth} from "../helpers/hooks/use-month";

type Props = {
    sch: TimetableStore
} & React.PropsWithChildren

const Dates = observer(({sch, children}:Props) => {

    const grid = useMonth(sch.timetable.activeDate, children)

    return (
        <div className={'month-timetable__dates'}>
            {grid}
        </div>
    );
});

export default Dates;