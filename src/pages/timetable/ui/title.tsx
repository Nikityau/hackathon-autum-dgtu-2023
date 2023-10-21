import React from 'react';

type Props = {
    title?: string
}

const Title = ({title = "Расписание"}:Props) => {
    return (
        <div className={'timetable-page__tittle'}>
            <span>{title}</span>
        </div>
    );
};

export default Title;