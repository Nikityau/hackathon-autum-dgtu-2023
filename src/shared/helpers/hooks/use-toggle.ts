import {useState} from "react";
import {F} from "../types/f.type";

interface ChangeF {
    on: F<void, void>
    off: F<void, void>
    set: F<boolean, void>
    swtch: F<void, void>
}

type ReturnToggle = [boolean, ChangeF]

export const useToggle = (def: boolean = false): ReturnToggle => {
    const [is, setIs] = useState<boolean>(def)

    const on = () => {
        setIs(true)
    }

    const off = () => {
        setIs(false)
    }

    const set = (b: boolean) => {
        setIs(b)
    }

    const swtch = () => {
        setIs(prev => !prev)
    }


    return [
        is,
        {
          on,
          off,
          set,
          swtch
        }
    ]
}