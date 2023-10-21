import {useState} from "react";
import {ILecture, lData} from "../../../../shared/data/lectres-list";

export const useLectures = () => {
    const [lectures, setLectures] = useState<ILecture[]>(() => lData)

    return lectures
}