import React,{ useState, useContext } from 'react';
import CountContext from './CountContext';

function CopmpoentC() {
    const [param,setParam] = useState(2);
    const countContext = useContext(CountContext);

    const inputChangeHandler = (eve) => {
        setParam(eve.target.value);
    }

    const doHandler = () => {
        countContext.dispatch({type:'mul',param:Number(param)});
    }

    const resetHandler = () => {
        countContext.dispatch({type:'reset'});
    }

    return <div>
            ComponentC - count={countContext.count}
            <input type='number' value={param} onChange={inputChangeHandler} />
            <button onClick={doHandler}>mul {param}</button>
            <button onClick={resetHandler}>reset</button>
        </div>
}

export default CopmpoentC;
