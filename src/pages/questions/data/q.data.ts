import {nanoid} from "nanoid";

export interface IQuestionData {
    id: string,
    date: Date,
    title: string
}

export const qData:IQuestionData[] = [
    {
        id: nanoid(),
        date: new Date(),
        title: 'Как прошла встреча?'
    },
    {
        id: nanoid(),
        date: new Date(),
        title: 'В какое время провести встречу?'
    },
    {
        id: nanoid(),
        date: new Date(),
        title: 'С кем провести следующую встречу?'
    },
    {
        id: nanoid(),
        date: new Date(),
        title: 'Как прошла встреча'
    },
    {
        id: nanoid(),
        date: new Date(),
        title: 'Как прошла встреча'
    },
]