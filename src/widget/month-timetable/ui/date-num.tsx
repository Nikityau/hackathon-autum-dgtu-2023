import React from 'react';
import cn from "classnames";

type Props = {
    date: number,
    isCurrMonth?: boolean
}

const DateNum = ({date, isCurrMonth = true}:Props) => {
    return (
        <div className={cn(
            'date-num',
            !isCurrMonth && 'date-num_month_another'
        )}>
           <span>{date}</span>
        </div>
    );
};

export default DateNum;