import {useState,useEffect} from 'react';

const useDrag = (elementRef,unit='px',initialPostion={left:0,top:0}) => {
    const [isDragged,setIsDragged] = useState(false);
    const [postion,setPostion] = useState(initialPostion);

    let oldMousePostion = {x:0,y:0};
    let oldElementPostion = {x:0,y:0};

    const getNumber = (str) => {
        return Number(str.replace(unit,''));
    }

    const configListener = (boo) => {
        if(boo){
            document.body.addEventListener('mouseup',handleMouseUp);
            document.body.addEventListener('mousemove',handleMouseMove);
            document.body.addEventListener('mouseout',handleMouseOut);
        }else{
            document.body.removeEventListener('mouseup',handleMouseUp);
            document.body.removeEventListener('mousemove',handleMouseMove);
            document.body.removeEventListener('mouseout',handleMouseOut);
        }
    }

    const handleMouseDown = (eve) => {
        configListener(true);
        setIsDragged(true);
        oldMousePostion.x = eve.x;
        oldMousePostion.y = eve.y;
        oldElementPostion.x = getNumber(elementRef.current.style.left);
        oldElementPostion.y = getNumber(elementRef.current.style.top);
    }

    const handleMouseMove = (eve) => {
        elementRef.current.style.left = oldElementPostion.x + eve.x - oldMousePostion.x + unit;
        elementRef.current.style.top = oldElementPostion.y + eve.y - oldMousePostion.y + unit;
        setPostion({left:elementRef.current.style.left,top:elementRef.current.style.top});
    }
    
    const handleMouseUp = (eve) => {
        configListener(false);
        setIsDragged(false);
    }

    const handleMouseOut = (eve) => {
        configListener(false);
        setIsDragged(false);
    }

    useEffect(() =>{
        elementRef.current.addEventListener('mousedown',handleMouseDown);
        elementRef.current.style.position = 'absolute';
        elementRef.current.style.left = initialPostion.left;
        elementRef.current.style.top = initialPostion.top;
        return () => {
            //elementRef.current.removeEventListener('mousedown',handleMouseDown);
            configListener(false);
        }
    },[])

    return [isDragged,postion];
}

export default useDrag
