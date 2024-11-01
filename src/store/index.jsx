import { combineReducers } from "redux";
import color from './modules/color.jsx';
import animal from './modules/animal.jsx';
import coffee from './modules/coffee.jsx';
export default combineReducers({
    color : color,
    animal,
    coffee
})