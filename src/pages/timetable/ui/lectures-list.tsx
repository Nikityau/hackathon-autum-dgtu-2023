import React, {useContext} from 'react';
import {LectureContext} from "../provider/lecture.provider";
import Lecture from "../../../enteties/lecture";
import {Link} from "react-router-dom";

const LecturesList = () => {

    const {lectures} = useContext(LectureContext)

    return (
        <div className={'timetable-page__lectures'}>
            {
                lectures.map(l => (
                    <Link to={`/oggetto/well-being-platform/timetable/${l.date.getFullYear()}-${l.date.getMonth()}-${l.date.getDate()}`} key={l.id}>
                        <Lecture
                            id={l.id}
                            date={l.date}
                            timeStart={l.timeStart}
                            timeEnd={l.timeEnd}
                            theme={l.theme}
                            members={l.members}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default LecturesList;