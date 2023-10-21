import React from 'react';

const Back = () => {
    return (
        <div className={'back-btn'} onClick={() => window.history.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path d="M6.75 14.4165L1.91938 8.78079C1.53419 8.3314 1.5342 7.66828 1.91938 7.21889L6.75 1.58317" stroke="#9C9C9C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Расписание</span>
        </div>
    );
};

export default Back;