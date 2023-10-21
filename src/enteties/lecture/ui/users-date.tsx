import React from 'react';
import {ILecture} from "../../../shared/data/lectres-list";
import Users from "./users";

type Props = {

} & Pick<ILecture, 'date'> & Pick<ILecture, 'members'>

const UsersDate = ({date, members}:Props) => {
    return (
        <div className={'lecture__date-members'}>
            <div className={'date-member__date'}>
                <span>{date.getDate()}.{date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`}</span>
            </div>
            <Users members={members}/>
        </div>
    );
};

export default UsersDate;