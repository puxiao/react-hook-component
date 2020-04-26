import React,{ useState, useContext } from 'react';
import CountContext from './CountContext';

function CopmpoentB() {
    const [param,setParam] = useState(1);
    const countContext = useContext(CountContext);

    const inputChangeHandler = (eve) => {
        setParam(eve.target.value);
    }

    const doHandler = () => {
        countContext.dispatch({type:'sub',param:Number(param)});
    }

    const resetHandler = () => {
        countContext.dispatch({type:'reset'});
    }

    return <div>
            ComponentB - count={countContext.count}
            <input type='number' value={param} onChange={inputChangeHandler} />
            <button onClick={doHandler}>sub {param}</button>
            <button onClick={resetHandler}>reset</button>
        </div>
}

export default CopmpoentB;
