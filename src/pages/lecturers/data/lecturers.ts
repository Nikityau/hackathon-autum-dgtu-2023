import {nanoid} from "nanoid";

import woman_img from '../assets/woman.png'
import man_img from '../assets/man.png'

export interface ILecturer {
    id: string,
    avatar: string,
    name: string,
    surname: string,
    speciality: string,
    description?: string,
    materials: string[],
}

export const lecturersData: ILecturer[] = [
    {
        id: nanoid(),
        avatar: woman_img,
        description: 'Магистр психологии. Разбираюсь в семейных и личных проблемах, помогаю в развитии талантов, способностей, нахождении успеха.',
        materials: [
            "https://psychojournal.ru/article/2385-kak-raspoznat-jadovitye-otnoshenija-vosem-priznakov-toksichnosti.html",
            "https://psychojournal.ru/article/2385-kak-raspoznat-jadovitye-otnoshenija-vosem-priznakov-toksichnosti.html",
        ],
        name: 'Анна',
        surname: "Королева",
        speciality: 'Психолог'
    },
    {
        id: nanoid(),
        avatar: man_img,
        materials: [
            "https://rmj.ru/articles/psikhiatriya/Somnologiya_son_ego_struktura_i_funkcii_insomniya/"
        ],
        name: 'Анна',
        surname: "Королева",
        speciality: 'Сомнолог'
    },
]