import React from 'react';

import SideBar from "../../widget/side-bar";
import TimetableBar from "../../widget/timetable-bar";

import InnerData from "./provider/inner-data";

import './style/index.scss'

const Platform = () => {
    return (
        <div className={'well-being-platform'}>
            <SideBar/>
            <InnerData/>
            <TimetableBar/>
        </div>
    );
};

export default Platform;