import React from 'react';
import {useLocation} from "react-router-dom";
import Input from "../../shared/ui/input";
import Button from "../../shared/ui/btn";

import './style/index.scss'

const ModerLecturer = () => {
    const {pathname} = useLocation()

    if(pathname.includes('edit')) {
        return (
            <div className={'moder-lecturer'}>
                <Input label={'Имя:'} value={'Анн'} onChange={() => {}}/>
                <Input label={'Отчество:'} value={'Pupkina'} onChange={() => {}}/>
                <Input label={'Фамилия:'} value={'Королева'} onChange={() => {}}/>
                <Input label={'Специальность:'} value={'Psycholog'} onChange={() => {}}/>
                <Input label={'Материалы:'} value={'https://ya.zaebalsya.com'} onChange={() => {}}/>
                <Input label={'Описание:'} value={'mi obosralis'} onChange={() => {}}/>
                <Button text={'Добавить'} onClick={() => {}}/>
            </div>
        )
    }

    return (
        <div className={'moder-lecturer'}>
            <Input label={'Имя:'} onChange={() => {}}/>
            <Input label={'Отчество:'} onChange={() => {}}/>
            <Input label={'Фамилия:'} onChange={() => {}}/>
            <Input label={'Специальность:'} onChange={() => {}}/>
            <Input label={'Материалы:'} onChange={() => {}}/>
            <Input label={'Описание:'} onChange={() => {}}/>
            <Button text={'Добавить'} onClick={() => {}}/>
        </div>
    );
};

export default ModerLecturer;