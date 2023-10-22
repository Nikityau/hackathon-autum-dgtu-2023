import React from 'react';
import Form from "./ui/form";

import './style/index.scss'

import logo_img from './assets/oggetto.png'

const Auth = () => {
    return (
        <div className={'auth-page'}>
            <img className={'auth-page__logo-up'} src={logo_img} alt={'logo'}/>
            <img className={'auth-page__logo-bottom'} src={logo_img} alt={'logo'}/>
            <Form/>
        </div>
    );
};

export default Auth;