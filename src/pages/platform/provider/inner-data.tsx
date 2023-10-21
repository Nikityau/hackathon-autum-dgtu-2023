import React from 'react';
import {Outlet} from "react-router-dom";

const InnerData = () => {
    return (
        <>
         <Outlet/>
        </>
    );
};

export default InnerData;