import React, {Children, useCallback, useMemo} from "react";
import DateNum from "../../ui/date-num";
import produce from "immer";
import {nanoid} from "nanoid";
import {Link} from "react-router-dom";

export const useMonth = (date: Date, children: React.ReactNode) => {
    const offsetByDay = {
        "0": 6,
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
        "6": 5,
    }

    const dateTemplate = useCallback((date: Date) => {
        return (
            <Link key={nanoid()} to={`/oggetto/well-being-platform/timetable/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}>
                <DateNum  date={date.getDate()} isCurrMonth={false}/>
            </Link>
        )
    }, [])

    const fillLeft = (grid: any[], date: Date, count: number): any[] => {
        return produce(grid, draft => {
            let d = new Date(date)
            for(let i = 0; i < count; ++i) {
                d = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1)
                draft.unshift(dateTemplate(d))
            }

            return draft
        })
    }

    const fillRight = (grid: any[], date:Date, count: number): any[] => {
        return produce(grid, draft => {
            let d = new Date(date)
            for(let i = 0; i < count; ++i) {
                d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
                draft.push(dateTemplate(d))
            }

            return draft
        })
    }

    const grid = useMemo(() => {
        let ch = Children.toArray(children)

        const startDay = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        const dayOffset = offsetByDay[startDay.getDay()]
        const dayOffsetRight = (() => {
            let count = 0;
            for(let i = 0; i < ch.length + dayOffset; ++i) {
                count += 1;
                if(count == 7) {
                    count = 0
                }
            }

            return count > 0 ? 7 - count : 0
        })()


        ch = fillLeft(ch, startDay, dayOffset)
        ch = fillRight(ch, lastDay, dayOffsetRight)

        return ch
    }, [children, date])


    return grid
}