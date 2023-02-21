import React, { useState,useReducer} from 'react'
const initialState = 0;
const reducer = (state, action) => {
if(action.type=== "Increment"){
    return state+1;

}
else{
    return state-1;

}
return state;

}



export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (  
        <>
           <p>{state}</p>
        <div>
            <button onClick={()=>dispatch({type: "Increment"})}> Inc </button>
            <button onClick={()=>dispatch({type: "Decrement"})}> Dec </button>
        </div>
        </>  
  )
};