import React from 'react';
import {F} from "../../../shared/helpers/types/f.type";

type Props = {
    tab: string,
    onClick: F<void, void>
}

const Tab = ({tab, onClick}:Props) => {
    return (
        <div className={'questions-page__tab'} onClick={() => onClick()}>
            <span>{tab}</span>
        </div>
    );
};

export default Tab;