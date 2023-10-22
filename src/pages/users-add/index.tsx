import React from 'react';
import Input from "../../shared/ui/input";
import Button from "../../shared/ui/btn";

import './style/index.scss'

const UsersAdd = () => {
    return (
        <div className={'add-users'}>
            <Input label={'Имя:'} onChange={() => {}}/>
            <Input label={'Фамилия:'} onChange={() => {}}/>
            <Input label={'Отчество:'} onChange={() => {}}/>
            <Input label={'Специальность:'} onChange={() => {}}/>
            <Input label={'Аватарка:'} type={'file'} onChange={() => {}}/>
            <Button text={'Добавить'} onClick={() => {}}/>
        </div>
    );
};

export default UsersAdd;