import React from 'react';
import Input from "../../shared/ui/input";
import Button from "../../shared/ui/btn";

import './style/index.scss'

const OfferTheme = () => {
    return (
        <div className={'offer-theme'}>
            <Input label={'Тема встречи:'} onChange={() => {}}/>
            <Button text={'Отправить'} onClick={() => {}}/>
        </div>
    );
};

export default OfferTheme;