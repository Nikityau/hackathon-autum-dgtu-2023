import React from 'react';
import {lecsData} from "../data/lect.data";
import {Link} from "react-router-dom";
import Lecture from "./lecture";

const Lecturers = () => {
    return (
        <div className={'main-page__lecturers'}>
            {
                lecsData.map(l => (
                    <Link to={`/oggetto/well-being-platform/timetable/${l.date.getFullYear()}-${l.date.getMonth()}-${l.date.getDate()}`} key={l.id}>
                        <Lecture
                            id={l.id}
                            lecturer={l.lecturer}
                            theme={l.theme}
                            date={l.date}
                            preview={l.preview}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default Lecturers;