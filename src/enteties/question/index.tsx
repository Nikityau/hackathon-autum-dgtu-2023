import React from 'react';

import './style/index.scss'

export type QuestionProps = {
    avatar: string,
    time: string,
    date: Date,
    question: string,
    name: string,
    surname: string
}

export const num = (num: number): string => {
    if(num < 10) return `0${num}`

    return `${num}`
}

const Question = (
    {
        question,
        surname,
        name,
        time,
        avatar,
        date
    }:QuestionProps) => {
    return (
        <div className={'question'}>
            <div className={'question__user-avatar'}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div className={'question__data'}>
                <div className={'question__title'}>
                    <span>{name} {surname}</span>
                    <span>{time} {num(date.getDate())}.{num(date.getMonth())}.{date.getFullYear()}</span>
                </div>
                <div className={'question__q'}>
                    <p>{question}</p>
                </div>
            </div>
        </div>
    );
};

export default Question;