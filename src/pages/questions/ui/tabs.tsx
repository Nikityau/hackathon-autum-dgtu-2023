import React, {useContext} from 'react';
import Tab from "./tab";
import {QTabsContext} from "../provider/q-tabs";

const Tabs = () => {

    const {setTab} = useContext(QTabsContext)

    return (
        <div className={'questions-page__tabs'}>
            <Tab tab={'Все'} onClick={() => setTab('all')}/>
            <Tab tab={'Активные'} onClick={() => setTab('active')}/>
            <Tab tab={'Завершенные'} onClick={() => setTab('completed')}/>
        </div>
    );
};

export default Tabs;