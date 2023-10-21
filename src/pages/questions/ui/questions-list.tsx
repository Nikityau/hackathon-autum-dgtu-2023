import React, {useContext} from 'react';
import {qData} from "../data/q.data";
import Question from "./question";
import {Link} from "react-router-dom";
import {QTabsContext} from "../provider/q-tabs";

const QuestionsList = () => {

    const q = useContext(QTabsContext)

    if(q?.tab == 'active') {
        return (
            <div className={'questions-page__list'}>
                {
                    qData.filter((q, i) => i == 0).map(q => (
                        <Link to={q.id} key={q.id}>
                            <Question
                                date={q.date}
                                title={q.title}
                                id={q.id}
                            />
                        </Link>
                    ))
                }
            </div>
        )
    }

    if(q?.tab == 'completed') {
        return (
            <div className={'questions-page__list'}>
                {
                    qData.filter((q, i) => i == 2).map(q => (
                        <Link to={q.id} key={q.id}>
                            <Question
                                date={q.date}
                                title={q.title}
                                id={q.id}
                            />
                        </Link>
                    ))
                }
            </div>
        )
    }

    return (
        <div className={'questions-page__list'}>
            {
                qData.map(q => (
                    <Link to={q.id} key={q.id}>
                        <Question
                            date={q.date}
                            title={q.title}
                            id={q.id}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default QuestionsList;