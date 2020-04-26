import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const initialCount = 0;
export const CountContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            console.log(state);
            return state + action.param;
        case 'sub':
            return state - action.param;
        case 'mul':
            return state * action.param;
        case 'reset':
            return initialCount;
        default:
            console.log('what?');
    }
}

function ParentComponent() {

    const [count, dispatch] = useReducer(reducer, initialCount);

    return <CountContext.Provider value={{count,dispatch}}>
        <div>
            ParentComponent - count={count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    </CountContext.Provider>
}

export default ParentComponent;