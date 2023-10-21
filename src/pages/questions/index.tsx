import React from 'react';
import Tabs from "./ui/tabs";
import QuestionsList from "./ui/questions-list";
import QTabsProvider from "./provider/q-tabs";

import './style/index.scss'
import Title from "../timetable/ui/title";

const Questions = () => {
    return (
        <QTabsProvider>
            <div className={'questions-page'}>
                <Title title={'Опросы'}/>
                <Tabs/>
                <QuestionsList/>
            </div>
        </QTabsProvider>
    );
};

export default Questions;