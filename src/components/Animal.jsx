import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cat, chick, dog, tiger } from '../store/modules/animal';

const Animal = () => {
    const animal = useSelector((state) => state.animal);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>동물의 울음소리</h1>
            <h1>{animal.name}는 {animal.crying}</h1>
            <p>
                <button onClick={() => dispatch(tiger())}>호랑이</button>
                <button onClick={() => dispatch(dog())}>강아지</button>
                <button onClick={() => dispatch(cat())}>고양이</button>
                <button onClick={() => dispatch(chick())}>병아리</button>
            </p>
        </div>
    );
};

export default Animal;