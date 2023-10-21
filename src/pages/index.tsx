import React, {Suspense} from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Auth from "./auth";
import Platform from "./platform";
import Main from "./main";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={'oggetto/well-being-platform'} element={<Platform/>}>
                <Route path={'main'} element={<Main/>}/>

                <Route path={''} element={<Navigate to={'main'}/>}/>
            </Route>
            <Route path={'oggetto/well-being-platform/auth'} element={<Auth/>}/>

            <Route path={'/'} element={<Navigate to={'oggetto/well-being-platform'}/>}/>
        </Routes>
    );
};


export default AppRouter;