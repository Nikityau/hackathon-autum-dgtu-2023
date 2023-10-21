import React from 'react';
import Questions from "../questions";
import Lecturers from "./ui/lecturers";

import './style/index.scss'

const Main = () => {
    return (
        <div className={'main-page'}>
            <div className={'main-page__questions'}>
                <Questions/>
            </div>
            <div className={'main-page__hr'}/>
            <Lecturers/>
        </div>
    );
};

export default Main;