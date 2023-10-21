import React from 'react';
import {ILecture} from "../../../shared/data/lectres-list";

type Props = {

} & Pick<ILecture, 'members'>

const Users = ({members}:Props) => {
    return (
        <div className={'lecture__users'}>
            {
                members.length == 0 &&
                <div className={'lecture__users-count'}>
                    <span>0</span>
                </div>
            }
            {
                members.length > 0 &&
                <>
                    <div className={'lecture__user'}>
                        <img src={members[0].avatar} alt={'u'}/>
                    </div>
                    <div className={'lecture__users-count'}>
                        <span>{members.length}</span>
                    </div>

                </>
            }
        </div>
    );
};

export default Users;