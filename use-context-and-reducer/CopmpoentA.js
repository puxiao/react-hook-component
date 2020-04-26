import React,{ useState, useContext } from 'react';
import CountContext from './CountContext';

function CopmpoentA() {
    const [param,setParam] = useState(1);
    const countContext = useContext(CountContext);

    const inputChangeHandler = (eve) => {
        setParam(eve.target.value);
    }

    const doHandler = () => {
        countContext.dispatch({type:'add',param:Number(param)});
    }

    const resetHandler = () => {
        countContext.dispatch({type:'reset'});
    }

    return <div>
            ComponentA - count={countContext.count}
            <input type='number' value={param} onChange={inputChangeHandler} />
            <button onClick={doHandler}>add {param}</button>
            <button onClick={resetHandler}>reset</button>
        </div>
}

export default CopmpoentA;
