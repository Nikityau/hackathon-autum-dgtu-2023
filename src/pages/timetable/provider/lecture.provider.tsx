import React from 'react';
import {ILecture} from "../../../shared/data/lectres-list";
import {useLectures} from "../helpers/hooks/use-lecturs";

interface ILectureContext {
    lectures: ILecture[]
}

type Props = {

} & React.PropsWithChildren

export const LectureContext = React.createContext<ILectureContext>(null)

const LectureProvider = ({children}:Props) => {

    const lectures = useLectures()

    return (
        <LectureContext.Provider value={{
            lectures
        }}>
            {children}
        </LectureContext.Provider>
    );
};

export default LectureProvider;