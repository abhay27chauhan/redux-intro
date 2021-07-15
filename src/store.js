import { createStore } from "redux";

const initialState = {
    balls: 5
}

function BallReducer(state = initialState, action) {

    switch (action.type) {
        case "buy_ball":
            return {
                balls: state.balls - 1
            }
        case "sell_ball":
           return {
                balls: state.balls + 1
            }
        default:
            return initialState;
    }
    // console.log("in store",action);
}

const store = createStore(BallReducer);

export default store;