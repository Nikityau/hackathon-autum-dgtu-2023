import React from 'react';
import {ILecturer} from "../../../pages/lecturers/data/lecturers";
import {nanoid} from "nanoid";

type Props = {

} & Pick<ILecturer, 'materials'>

const Masterials = ({materials}:Props) => {
    if(materials.length == 0) return null

    return (
        <div className={'lecturer__materials'}>
            <div className={'lecturer__material-title'}>
                <span>Материалы:</span>
            </div>
            <div className={'lecturer__material-list'}>
                {
                    materials.map(m => (
                        <span key={nanoid()}>{m}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default Masterials;