import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Auth from "./auth";
import Platform from "./platform";
import Main from "./main";
import DayLecture from "./day-lecture";
import Timetable from "./timetable";
import Lecturers from "./lecturers";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={'oggetto/well-being-platform'} element={<Platform/>}>
                <Route path={'main'} element={<Main/>}/>
                <Route path={'timetable'} element={<Timetable/>}/>
                <Route path={'timetable/:date'} element={<DayLecture/>}/>
                <Route path={'lecturers'} element={<Lecturers/>}/>

                <Route path={''} element={<Navigate to={'main'}/>}/>
            </Route>
            <Route path={'oggetto/well-being-platform/auth'} element={<Auth/>}/>

            <Route path={'/'} element={<Navigate to={'oggetto/well-being-platform'}/>}/>
        </Routes>
    );
};


export default AppRouter;