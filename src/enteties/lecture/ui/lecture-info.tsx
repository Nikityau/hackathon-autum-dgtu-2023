import React from 'react';
import {ILecture} from "../../../shared/data/lectres-list";

type Props = {

} & Pick<ILecture, 'timeStart'> & Pick<ILecture, 'timeEnd'> & Pick<ILecture, 'theme'>

const LectureInfo = ({timeEnd, timeStart, theme}:Props) => {
    return (
        <div className={'lecture__info'}>
            <div className={'lecture__hr'}/>
            <div className={'lecture__info-wrapper'}>
                <div className={'lecture__time'}>
                    <span>{timeStart} - {timeEnd}</span>
                </div>
                <div className={'lecture__theme'}>
                    <p>{theme}</p>
                </div>
            </div>
        </div>
    );
};

export default LectureInfo;