//import React from 'react';
import React,{useReducer} from 'react';

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':return state +1;
        case 'decrement':return state -1;
        case 'reset':return 0;
        default:return state;

    }
}

function Usereducer() {
    
    // const [count,dispatch]=useReducer(reducer,0);
    // const increment=()=>{
    //     dispatch({type:'increment'});
    // }
    // const decrement=()=>{
    //     dispatch({type:'decrement'});
    // }
    // const reset=()=>{
    //     dispatch({type:'reset'});
    // }
    // useEffect(()=>
    // {
    //     document.title=name+count
    // })
    const[count,dispatch]=useReducer(reducer,0)
    const increment=()=>{
        dispatch({type:'increment'})
    }
    const decrement=()=>{
        dispatch({type:'decrement'})
    }
    const reset=()=>{
        dispatch({type:'reset'})
    }
    return (
        <div>
            <h4>{count}</h4>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={reset}>reset</button>

        </div>
    );
}

export default Usereducer;