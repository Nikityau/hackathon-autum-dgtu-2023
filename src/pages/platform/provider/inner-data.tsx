import React from 'react';
import {Outlet} from "react-router-dom";

const InnerData = () => {
    return (
        <div className={'inner-data'}>
            <Outlet/>
        </div>
    );
};

export default InnerData;