import React from 'react';

const Count = () => {
    return (
        <div>
            <h1>카운트 : {count }</h1>
            <p>
            <button onClick{ () => dispatchEvent(increment())}>증가</button>
            <button onClick{ () => dispatchEvent(decrement())}>증가</button>
            <button onClick{ () => dispatchEvent(reset())}>증가</button>
            </p>
        </div>
    );
};

export default Count;