import React from 'react';
import {useParams} from "react-router-dom";

const DayLectureProvider = () => {
    const {date} = useParams()


    if(!date) return

    return (
        <div className={'lecture-listeners'}>
            <div className={'lecture-listeners__title'}>
                <span>Слушатели:</span>
            </div>
            <div className={'lecture-listeners__list'}>
                <span>Маргарита Патапенко</span>
                <span>Маргарита Патапенко</span>
                <span>Маргарита Патапенко</span>
                <span>Маргарита Патапенко</span>
                <span>Маргарита Патапенко</span>
                <span>Маргарита Патапенко</span>
            </div>
        </div>
    );
};

export default DayLectureProvider;