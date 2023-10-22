import React from 'react';
import Tabs from "./ui/tabs";
import QuestionsList from "./ui/questions-list";
import QTabsProvider from "./provider/q-tabs";

import './style/index.scss'
import Title from "../timetable/ui/title";
import {observer} from "mobx-react-lite";
import {UserStore} from "../../local-store/user/user-store";
import {Link} from "react-router-dom";
import Button from "../../shared/ui/btn";

type Props = {
    user: UserStore
}

const Questions = observer(({user}:Props) => {
    return (
        <QTabsProvider>
            <div className={'questions-page'}>
                <Title title={'Опросы'}/>
                <Tabs/>
                <QuestionsList/>
                {
                    user.role == 'moderator' &&
                    <Link to={'/oggetto/well-being-platform/questions/create'}>
                        <Button text={'Создать опрос'} onClick={() => {}}/>
                    </Link>
                }
            </div>
        </QTabsProvider>
    );
});

export default Questions;