import React, { useContext } from 'react'
import BuycarContext from './BuycarContext'

function PayBt() {
    const buycarContext = useContext(BuycarContext);

    const clickHandle = () => {
        let result = [];
        for (let item of buycarContext.list) {
            result.push({ pid: item.pid, count: item.count });
        }
        alert(JSON.stringify(result));
    }

    return (
        <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'20px 0'}}>
            <label>总价：¥{buycarContext.totalCost}</label>
            <button
                onClick={clickHandle}
                disabled={!Boolean(buycarContext.list.length > 0)}
                style={{ width: '100px', height: '36px', fontSize: '16px', marginLeft: '10px' }}>
                提交订单
            </button>
        </div>
    )
}

export default PayBt
