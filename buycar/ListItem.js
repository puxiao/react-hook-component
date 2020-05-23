import React from 'react'

function ListItem({value,dispatch}) {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
        padding: '0 20px',
        margin: '2px 0',
        backgroundColor: '#eee'
    }

    const inputChange = (eve) => {
        let count = Number(eve.target.value);
        count = Math.max(count,1);
        if(value.count !== count){
            dispatch({type:'count',pid:value.pid,count});
        }
    }

    const delOnClick = () => {
        dispatch({type:'del',pid:value.pid});
    }

    return (
        <div style={style}>
            <label>商品编号：{value.pid}</label>
            <label>{value.name}</label>
            <label>单价：¥{value.price}</label>
            <input type='number' min='1' pattern='[0-9]' value={value.count} onChange={inputChange} />
            <label>小计：¥{value.cost}</label>
            <button onClick={delOnClick}>删除</button>
        </div>
    )
}

export default ListItem;
