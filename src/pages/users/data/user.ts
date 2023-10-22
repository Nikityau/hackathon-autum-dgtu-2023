import {nanoid} from "nanoid";

import user_img from '../assets/user-man.png'

export interface IUser {
    id: string,
    avatar: string,
    skill: string,
    name: string,
    surname: string,
}

export const usersData: IUser[] = [
    {
        id: nanoid(),
        avatar: user_img,
        name: 'Антон',
        surname: 'Елисеев',
        skill: 'Frontend-developer'
    },
    {
        id: nanoid(),
        avatar: user_img,
        name: 'Антон',
        surname: 'Елисеев',
        skill: 'Frontend-developer'
    },
]