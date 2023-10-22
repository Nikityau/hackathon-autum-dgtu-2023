import React from 'react';
import {observer} from "mobx-react-lite";
import {UserStore} from "../../../local-store/user/user-store";
import Title from "../../../pages/timetable/ui/title";
import {useParams} from "react-router-dom";

type Props = {
    user: UserStore
}

const ModerStatProvider = observer(({user}:Props) => {
    const {date} = useParams()

    if(!date) return
    if(user.role != 'moderator') return null

    return (
        <div className={'lecture-statistic'}>
            <Title title={'Статистика'}/>
            <div className={'lecture-statistic__mark'}>
                <span>Оценка: 6/10</span>
            </div>
            <div className={'lecture-statistic__users'}>
                <div className={'lecture-statistic__users-title'}>
                    <span>Пришли на лекцию: 5/6</span>
                </div>
                <div className={'lecture-statistic__list'}>
                    <span>Маргарита Патапенко</span>
                    <span>Маргарита Патапенко</span>
                    <span>Маргарита Патапенко</span>
                    <span>Маргарита Патапенко</span>
                    <span>Маргарита Патапенко</span>
                </div>
            </div>
        </div>
    );
});

export default ModerStatProvider;