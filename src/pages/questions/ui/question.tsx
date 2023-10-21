import React from 'react';
import {IQuestionData} from "../data/q.data";
import {num} from "../../../enteties/question";


type Props = {

} & IQuestionData

const Question = (
    {date, id, title}:Props) => {
    return (
        <div className={'questions-page__q'}>
            <div className={'questions-page__q-data'}>
                <span>{num(date.getDate())}.{num(date.getMonth())}.{date.getFullYear()}</span>
                <span>{title}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                <path d="M1.5 17.6666L7.83062 10.2809C8.2158 9.83152 8.2158 9.1684 7.83062 8.71901L1.5 1.3333" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
    );
};

export default Question;