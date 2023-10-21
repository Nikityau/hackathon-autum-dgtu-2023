import React from 'react';

const SendMessage = () => {
    return (
        <div className={'send-message'}>
            <input placeholder={'Напишите ваш вопрос или что бы вы хотели обсудить на встрече'}/>
            <div className={'send-message__image'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.7232 2.75895C20.6613 2.44624 21.5538 3.33873 21.2411 4.27684L16.1845 19.4467C15.8561 20.4318 14.5163 20.5631 14.0029 19.6603L10.9078 14.2172C10.6409 13.7478 10.2522 13.3591 9.78283 13.0922L4.33973 9.99712C3.437 9.4838 3.56824 8.14394 4.55342 7.81555L19.7232 2.75895Z" stroke="#070707" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    );
};

export default SendMessage;