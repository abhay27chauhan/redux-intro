import { combineReducers } from "redux";
import BallReducer from "./BallReducer/BallReducer";
import BatReducer from "./BatReducer/BatReducer";

const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer
})

export default rootReducer;