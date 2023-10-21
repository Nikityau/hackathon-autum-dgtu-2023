import React, {useEffect} from 'react';
import Timetable from "../../../pages/timetable";
import {useLocation} from "react-router-dom";

const LecturesProvider = () => {

    const loc = useLocation()

    useEffect(() => {
        console.log(loc.pathname)
    }, [loc])

    if(loc.pathname.includes('timetable')) return null

    return (
        <div className={'timetable-bar__lectures'}>
            <Timetable/>
        </div>
    );
};

export default LecturesProvider;