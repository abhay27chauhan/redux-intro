import { combineReducers } from "redux";
import BallReducer from "./BallReducer/BallReducer";
import BatReducer from "./BatReducer/BatReducer";
import UserReducer from "./User/UserReducer";

const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    User: UserReducer
})

export default rootReducer;