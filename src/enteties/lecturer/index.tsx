import React from 'react';
import Masterials from "./ui/masterials";

import {ILecturer} from "../../pages/lecturers/data/lecturers";

import './style/index.scss'

type Props = {

} & ILecturer

const Lecturer = (
    {
        avatar,
        surname,
        name,
        materials,
        id,
        speciality,
        description
    }:Props) => {
    return (
        <div className={'lecturer'}>
            <div className={'lecturer__avatar'}>
                <img src={avatar} alt={'icon'}/>
            </div>
            <div className={'lecturer__info'}>
                <div className={'lecturer__name'}>
                    <span>{name} {surname}</span>
                </div>
                <div className={'lecturer__info'}>
                    <span>{speciality}</span>
                </div>
                <div className={'lecturer__descr'}>
                    <p>{description}</p>
                </div>
                <Masterials materials={materials}/>
            </div>
        </div>
    );
};

export default Lecturer;