import React from 'react';
import {lecturersData} from "../data/lecturers";
import Lecturer from "../../../enteties/lecturer";


const LecturersList = () => {
    return (
        <div className={'lecturers__list'}>
            {
                lecturersData.map(l => (
                    <Lecturer
                        key={l.id}
                        id={l.id}
                        avatar={l.avatar}
                        name={l.name}
                        surname={l.surname}
                        speciality={l.speciality}
                        materials={l.materials}
                    />
                ))
            }
        </div>
    );
};

export default LecturersList;