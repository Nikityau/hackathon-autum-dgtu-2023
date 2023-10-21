import React from 'react';

import './style/index.scss'
import Title from "./ui/title";
import LecturesList from "./ui/lectures-list";
import LectureProvider from "./provider/lecture.provider";

const Timetable = () => {
    return (
        <LectureProvider>
            <div className={'timetable-page'}>
                <Title/>
                <LecturesList/>
            </div>
        </LectureProvider>
    );
};

export default Timetable;