import React from 'react';
import {ILec} from "../data/lect.data";
import {num} from "../../../enteties/question";

type Props = {

} & ILec

const Lecture = (
    {
        lecturer,
        id,
        preview,
        date,
        theme
    }:Props) => {
    return (
        <div className={'lecture-main'}>
            <div className={'lecture-main__preview'}>
                <img src={preview} alt={'image'}/>
            </div>
            <div className={'lecture-main__info'}>
                <span>{lecturer}|{num(date.getDate())}.{num(date.getMonth())}.{date.getFullYear()}</span>
                <p>{theme}</p>
            </div>
        </div>
    );
};

export default Lecture;