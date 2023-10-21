import {NavDataProps} from "../../../enteties/nav";
import {nanoid} from "nanoid";

import main_img from '../assets/home.svg'
import sch_img from '../assets/schedule.svg'
import lecturer_img from '../assets/lecturer.svg'
import ask_img from '../assets/chart.svg'

export interface NavData extends NavDataProps{
    id: string
}

export const navData: NavData[] = [
    {
        id: nanoid(),
        link: 'main',
        title: 'Главная',
        icon: main_img,
        infoCount: 0
    },
    {
        id: nanoid(),
        link: 'timetable',
        title: 'Расписание',
        icon: sch_img,
        infoCount: 10
    },
    {
        id: nanoid(),
        link: 'lecturers',
        title: 'Лекторы',
        icon: lecturer_img,
        infoCount: 0
    },
    {
        id: nanoid(),
        link: 'questions',
        title: 'Опросы',
        icon: ask_img,
        infoCount: 0
    },
]