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
import Questions from "./questions";
import QuestionPage from "./question-page";
import OfferTheme from "./offer-theme";
import OfferMan from "./offer-man";
import {userStore} from "../local-store/user/user-store";
import ModerLecturer from "./moder-lecturer";
import UsersPage from "./users";
import UsersAdd from "./users-add";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={'oggetto/well-being-platform'} element={<Platform/>}>
                <Route path={'main'} element={<Main/>}/>
                <Route path={'timetable'} element={<Timetable/>}/>
                <Route path={'timetable/:date'} element={<DayLecture/>}/>
                <Route path={'lecturers'} element={<Lecturers/>}/>
                <Route path={'lecturers/edit/:id'} element={<ModerLecturer/>}/>
                <Route path={'lecturers/add'} element={<ModerLecturer/>}/>
                <Route path={'questions'} element={<Questions user={userStore}/>}/>
                <Route path={'questions/create'} element={'question create'}/>
                <Route path={'questions/:id'} element={<QuestionPage/>}/>
                <Route path={'offer/meet-theme'} element={<OfferTheme/>}/>
                <Route path={'offer/man'} element={<OfferMan/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'users/add'} element={<UsersAdd/>}/>

                <Route path={''} element={<Navigate to={'main'}/>}/>
            </Route>
            <Route path={'oggetto/well-being-platform/auth'} element={<Auth/>}/>

            <Route path={'/'} element={<Navigate to={'oggetto/well-being-platform'}/>}/>
        </Routes>
    );
};


export default AppRouter;