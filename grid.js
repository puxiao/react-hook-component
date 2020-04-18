import React, { useState } from 'react';

const BLUE = 'blue';
const RED = 'red';
const WHITE = 'white';

function GridItem() {
    const [color, setColor] = useState(WHITE);
    const [onoff, setOnoff] = useState(false);

    const style = {
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'whitesmoke',
        backgroundColor: color
    };

    const clickHandler = (eve) => {
        let newOnoff = !onoff;
        setOnoff(newOnoff);
        setColor(newOnoff ? BLUE : WHITE);
    }

    const mouseOverHandler = (eve) => {
        if (!onoff) {
            setColor(RED);
        }
    }

    const mouseOutHandler = (eve) => {
        if (!onoff) {
            setColor(WHITE);
        }
    }

    return <div
        style={style}
        onClick={clickHandler}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
    />;
}

function GridRow(props) {
    const style = {
        display: 'flex'
    }

    let row = [];
    for (let i = 0; i < props.n; i++) {
        row.push(<GridItem key={`item${i}`} />);
    }

    return <div style={style}>{row}</div>
}

function Grid() {
    const [n, setN] = useState(4);

    let rows = [];
    for (let i = 0; i < n; i++) {
        rows.push(<GridRow n={n} key={`row${i}`} />);
    }

    const onChangeHandler = (eve) => {
        setN(eve.target.value);
    }

    return <div>
        <input type='number' value={n} onChange={onChangeHandler} min={0} />
        {rows}
        </div>;
}

export default Grid;