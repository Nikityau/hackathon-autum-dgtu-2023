import React from 'react';
import Back from "./ui/back";

import './style/index.scss'
import Lecture from "../../enteties/lecture";
import {nanoid} from "nanoid";
import user_img from "../../shared/assets/user1.png";
import Lecturer from "../../enteties/lecturer";

import w_img from '../lecturers/assets/woman.png'
import Title from "../timetable/ui/title";
import Button from "../../shared/ui/btn";
import SendMessage from "./ui/send-message";
import Questions from "./ui/questions";

const isAuth: boolean = false

const DayLecture = () => {
    return (
        <div className={'day-lecture'}>
            <Back/>
            <Lecture
                id={nanoid()}
                date={new Date()}
                timeStart={'12:00'}
                timeEnd={'13:00'}
                theme={'Лекция «Эмоциональное выгорание: диагностика и профилактика»'}
                members={[
                    {
                        id: nanoid(),
                        avatar: user_img,
                        name: 'Vasya',
                        surname: 'Pupkin'
                    },
                    {
                        id: nanoid(),
                        avatar: user_img,
                        name: 'Vasya',
                        surname: 'Pupkin'
                    },
                    {
                        id: nanoid(),
                        avatar: user_img,
                        name: 'Vasya',
                        surname: 'Pupkin'
                    }, {
                        id: nanoid(),
                        avatar: user_img,
                        name: 'Vasya',
                        surname: 'Pupkin'
                    },
                ]}
            />
            <Title title={'Лектор:'}/>
            <Lecturer
                id={nanoid()}
                avatar={w_img}
                name={'Анна'}
                surname={'Королева'}
                speciality={'Психолог'}
                materials={[
                    'https://psychojournal.ru/article/2385-kak-raspoznat-jadovitye-otnoshenija-vosem-priznakov-toksichnosti.html',
                    'https://psychojournal.ru/article/2385-kak-raspoznat-jadovitye-otnoshenija-vosem-priznakov-toksichnosti.html'
                ]}
                description={'Магистр психологии. Разбираюсь в семейных и личных проблемах, помогаю в развитии талантов, способностей, нахождении успеха.'}
            />
            <Title title={'Вопросы:'}/>
            <Questions/>
            {
                isAuth
                    ? <Button onClick={() => {
                    }} text={'Записаться'}/>
                    : <SendMessage/>
            }
        </div>
    );
};

export default DayLecture;