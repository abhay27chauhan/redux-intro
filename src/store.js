import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// process of redux;

// component who have subscribed to redux store with the help of connect (higher order function) can get the state as props returned from mapStateToProps function

// component can also manipulate the state with the help of mapDispatchToProps function which gives different function in the form of props to component, by calling those the component can dispatch the action. 

// the dispatched actions are then send to the reducers, the reducer then change the state based on those actions.

// middlewares are used when we don't have actions to directly tell the reducers what to do like in case of fetch data(async work), so instead of dispatching the action we dispatches the function and the middleware then wait for the function to return an action which will then be sent to reducers.