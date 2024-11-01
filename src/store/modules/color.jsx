const RED = 'color/RED';

const GREEN = 'color/GREEN';
const BLUE = 'color/BLUE';
const MAGENTA = 'color/MAGENTA';

export const red = () => ( { type : RED });
export const green = () => ( { type : GREEN });
export const blue = () => ( { type : BLUE });
export const magenta = () => ( { type : MAGENTA });

const initalState = { color : 'hotpink'};

const reducer =(state=initalState, action) => {
    switch(action.type){
        case RED: return {color : 'red'}
        case GREEN: return {color : 'green'}
        case BLUE: return {color : 'blue'}
        case MAGENTA: return {color : 'magenta'}
        default : return state; //반드시 default 작성해야한다. 
    }

}

export default reducer