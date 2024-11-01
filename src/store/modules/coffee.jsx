//1. 액션 생성
//모듈 이름을 앞에 붙여주어서 액션명 중복을 방지한다.
const COFFEE1 = 'coffee/coffee1';
const COFFEE2 = 'coffee/coffee2';
const COFFEE3 = 'coffee/coffee3';

//2. 액션 보내기
export const coffee1 = (e) => ({ type: COFFEE1 , count : e} );
export const coffee2 = (e) => ({ type: COFFEE2 , count : e} );
export const coffee3 = (e) => ({ type: COFFEE3 , count : e} );

//3. 초기값 설정
const initialState = {
    name1: '아이스아메리카노', 
    count1 : 0 , 
    name2: '카페라떼', 
    count2 : 0 , 
    name3: '카푸치노', 
    count3 : 0 
};

//4. 리듀서 만들기 - 파라메터를 참조하여, 새로운 상태 객체를 만든다.
//state - 현재상태(초기값), action - 액션 객체
//state는 반드시 초기값(initialState)을 주어야 한다.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COFFEE1:
            return { ...state, count1 : action.count }; 
        case COFFEE2:
            return { ...state, count2 : action.count }; 
        case COFFEE3:
            return { ...state, count3 : action.count };            
        default:
            return state;
    }
};



//컴포넌트가 아닌 순수 js파일이다.
export default reducer;