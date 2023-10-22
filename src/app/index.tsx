import React, {useEffect} from "react";

import WithRoute from "./provider/with-route";
import AppRouter from "../pages";

import './style/index.scss'

const App = () => {
    return (
        <WithRoute>
            <AppRouter/>
        </WithRoute>
    );
};

export default App;