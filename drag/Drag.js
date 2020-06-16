import React,{useRef} from 'react'
import useDrag from './useDrag';

function Drag() {
    const divRef = useRef(null);
    const [divIsDragged,divPosition] = useDrag(divRef);

    const imgRef = useRef(null);
    useDrag(imgRef);

    let style = {
        width:'150px',
        height:'150px',
        backgroundColor:'green',
        userSelect:'none'
    }

    return (
        <>
        <div style={style} ref={divRef}>
            {divIsDragged?'正拖动':'已松开'}<br/>
            left:{divPosition.left}<br/>
            top:{divPosition.top}
        </div>
        <img draggable='false' ref={imgRef} src='https://www.baidu.com/img/flexible/logo/pc/result.png' alt='' />
        </>
    )
}

export default Drag
