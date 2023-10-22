import React from 'react';
import Login from "./login";
import Password from "./password";
import Button from "../../../shared/ui/btn";
import WithGoogle from "../provider/with-google";

const Form = () => {
    return (
        <div className={'auth-form'}>
            <Login onChange={() => {}}/>
            <Password onChange={() => {}}/>
            <WithGoogle/>
            <Button text={'Войти'} onClick={() => {}}/>
        </div>
    );
};

export default Form;