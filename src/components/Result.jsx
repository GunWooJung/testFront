import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
    const coffee = useSelector((state) => state.coffee);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const onOrder = () => {
        setIsDivVisible(!isDivVisible);
    };

    return (
     
        <div>
        <button onClick = {onOrder}>주문</button>
        {isDivVisible && (
        <div>
            <hr />
            {(coffee.count1 !== 0 && coffee.count1 !== '') && `${coffee.name1} / ${coffee.count1}개 / ${coffee.count1 * 100}원`} 
            <br />
            {(coffee.count2 !== 0 && coffee.count2 !== '')&& `${coffee.name2} / ${coffee.count2}개 / ${coffee.count2 * 200}원`} 
            <br />
            {(coffee.count3 !== 0 && coffee.count3 !== '')&& `${coffee.name3} / ${coffee.count3}개 / ${coffee.count3 * 300}원`} 
            <br />
            <hr />
            총 금액 : {coffee.count1 * 100 + coffee.count2 * 200 + coffee.count3 * 300}원
        </div>
        )}
        </div>
    );
};

export default Result;