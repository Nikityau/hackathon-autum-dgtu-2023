import {nanoid} from "nanoid";

import user_img from '../assets/user1.png'

export interface ILecture {
    id: string,
    date: Date,
    timeStart: string,
    timeEnd: string,
    theme: string,
    members: User[]
}

export interface User {
    id: string,
    name: string,
    surname: string,
    avatar: string
}

export const lData: ILecture[] = [
    {
        id: nanoid(),
        date: new Date(),
        members: [
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
            },{
                id: nanoid(),
                avatar: user_img,
                name: 'Vasya',
                surname: 'Pupkin'
            },

        ],
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»',
        timeEnd: '13:00',
        timeStart: '12:00'
    },
    {
        id: nanoid(),
        date: new Date(),
        members: [
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
            },{
                id: nanoid(),
                avatar: user_img,
                name: 'Vasya',
                surname: 'Pupkin'
            },

        ],
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»',
        timeEnd: '13:00',
        timeStart: '12:00'
    },
    {
        id: nanoid(),
        date: new Date(),
        members: [
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
            },{
                id: nanoid(),
                avatar: user_img,
                name: 'Vasya',
                surname: 'Pupkin'
            },

        ],
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»',
        timeEnd: '13:00',
        timeStart: '12:00'
    },
    {
        id: nanoid(),
        date: new Date(),
        members: [
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
            },{
                id: nanoid(),
                avatar: user_img,
                name: 'Vasya',
                surname: 'Pupkin'
            },

        ],
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»',
        timeEnd: '13:00',
        timeStart: '12:00'
    },
]