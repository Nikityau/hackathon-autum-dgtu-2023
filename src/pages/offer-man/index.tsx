import React from 'react';

import './style/index.scss'
import Input from "../../shared/ui/input";
import Button from "../../shared/ui/btn";

const OfferMan = () => {
    return (
        <div className={'offer-man'}>
            <Input label={'Имя:'} onChange={() => {}}/>
            <Input label={'Отчество:'} onChange={() => {}}/>
            <Input label={'Фамилия:'} onChange={() => {}}/>
            <Input label={'Специальность:'} onChange={() => {}}/>
            <Input label={'Специальность:'} onChange={() => {}}/>
            <Input label={'Ссылка на работы:'} onChange={() => {}}/>
            <Button text={'Отправить'} onClick={() => {}}/>
        </div>
    );
};

export default OfferMan;