import React from 'react';
import {BrowserRouter} from "react-router-dom";

const WithRoute = ({children}:React.PropsWithChildren) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default WithRoute;