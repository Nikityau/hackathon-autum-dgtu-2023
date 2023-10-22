import {action, makeObservable, observable} from "mobx";

export type Role = 'user' | 'moderator' | 'guest'

type User = {
    name: string, surname: string, avatar: string, role: Role
}

export class UserStore {
    role: Role = 'user'
    avatar: string = ''
    name: string = ''
    surname: string = ''

    constructor() {
        makeObservable(this, {
            role: observable,
            avatar: observable,
            name: observable,
            surname: observable,
            setUser: action
        })

        this.role = localStorage.getItem('user-role') as Role

        this.name = 'Александра'
        this.surname = 'Андреева'
        this.role = 'moderator'
    }

    setUser({name, role,avatar, surname}:User) {
        this.role = role
        this.name = name
        this.surname = surname
        this.avatar = avatar

        localStorage.setItem('user-role', role)
    }
}

export const userStore= new UserStore()