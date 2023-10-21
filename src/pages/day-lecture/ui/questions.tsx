import React from 'react';
import {qData} from "../data/q";
import Question from "../../../enteties/question";
import {nanoid} from "nanoid";

const Questions = () => {
    return (
        <div className={'day-lecture__question'}>
            {
                qData.map(q => (
                    <Question
                        key={nanoid()}
                        avatar={q.avatar}
                        time={q.time}
                        date={q.date}
                        question={q.question}
                        name={q.name}
                        surname={q.surname}/>
                ))
            }
        </div>
    );
};

export default Questions;