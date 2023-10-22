import React from 'react';
import {lecturersData} from "../data/lecturers";
import Lecturer from "../../../enteties/lecturer";
import {observer} from "mobx-react-lite";
import {UserStore} from "../../../local-store/user/user-store";
import {Link} from "react-router-dom";
import Button from "../../../shared/ui/btn";

type Props = {
    user: UserStore
}


const LecturersList = observer(({user}:Props) => {

    if(user.role == 'moderator') {
        return (
            <div className={'lecturers__list'}>
                {
                    lecturersData.map(l => (
                        <>
                            <Lecturer
                                key={l.id}
                                id={l.id}
                                avatar={l.avatar}
                                name={l.name}
                                surname={l.surname}
                                speciality={l.speciality}
                                materials={l.materials}
                            />
                            <div className={'lecturer__moderator-btns'}>
                                <Link to={`edit/${l.id}`}>
                                    <div className={'lecturer__moderator-btn'}>
                                        <span>Редактировать</span>
                                    </div>
                                </Link>
                                <div className={'lecturer__moderator-btn lecturer__moderator-btn_delete'}>
                                    <span>Удалить</span>
                                </div>
                            </div>
                        </>
                    ))
                }

                <Link to={'add'}>
                    <Button text={'Добавить лектора'} onClick={() => {}}/>
                </Link>
            </div>
        )
    }

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
});

export default LecturersList;