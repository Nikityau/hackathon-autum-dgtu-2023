import {nanoid} from "nanoid";

export interface ILec {
    id: string,
    preview: string,
    lecturer: string,
    date: Date,
    theme: string
}

import img from '../assets/lec_img.png'


export const lecsData: ILec[] = [
    {
        id: nanoid(),
        date: new Date(),
        lecturer: 'Анна Королева',
        preview: img,
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»'
    },
    {
        id: nanoid(),
        date: new Date(),
        lecturer: 'Анна Королева',
        preview: img,
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»'
    },
    {
        id: nanoid(),
        date: new Date(),
        lecturer: 'Анна Королева',
        preview: img,
        theme: 'Лекция «Эмоциональное выгорание: диагностика и профилактика»'
    },
]