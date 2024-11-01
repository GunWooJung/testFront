import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coffee1 , coffee2, coffee3 } from '../store/modules/coffee';

const Coffee = () => {

   // const coffee = useSelector((state) => state.coffe);
    const dispatch = useDispatch();

    return (
        <div>
            <label>아메리카노 100원</label>
            <input type="text" onChange = {(e) => dispatch(coffee1(e.target.value))}></input>개 &emsp;
            <label>카페라떼 200원</label>
            <input type="text" onChange = {(e) => dispatch(coffee2(e.target.value))}></input>개 &emsp;
            <label>카푸치노 300원</label>
            <input type="text" onChange = {(e) => dispatch(coffee3(e.target.value))}></input>개 &emsp;
        </div>
    );
};

export default Coffee;