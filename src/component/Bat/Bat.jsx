import React, { useState } from 'react'
import { connect } from "react-redux";

function Bat(props) {
    console.log(props);
    const [value, setValue] = useState();
    // state -> props (redux)
    // prop -> function to set the state

    // const [balls, setBalls] = useState(15);

    return (
        <div>
            <h1>Number of Balls {props.bats}</h1>
            <input value={value}
                onChange={(e) => {
                    // console.log(e.target.value)
                    setValue(e.target.value)
                }}
            ></input>
            <button onClick={() => {
                props.setBat(value);
                setValue("");
            }}>Buy Bat</button>
        </div>
    )
}

// -> provide state variables from store
const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store.Bat;
}

// dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    // handler function 
    return {
        setBat: (value) => {
            // dispatch action 
            return dispatch({ type: "buy_bat", payload: value })
        },
    }
}

// higher order function
const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(Bat);

export default HigherOrderComponent;
