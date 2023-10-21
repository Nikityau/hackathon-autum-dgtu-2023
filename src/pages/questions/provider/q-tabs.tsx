import React, {useState} from 'react';
import {F} from "../../../shared/helpers/types/f.type";

type Props = {

} & React.PropsWithChildren

export type QTab = 'all' | 'active' | 'completed'

interface IQTabContext {
    tab: QTab,
    setTab: F<QTab, void>
}

export const QTabsContext = React.createContext<IQTabContext>(null)


const QTabsProvider = ({children}:Props) => {
    const [tab, setTab] = useState<QTab>('all')

    return (
        <QTabsContext.Provider value={{
            tab,
            setTab
        }}>
            {children}
        </QTabsContext.Provider>
    );
};

export default QTabsProvider;