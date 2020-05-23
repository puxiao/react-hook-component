import React from 'react'
import List from './List'
import useBuycarData from './useBuycarData';
import BuycarContext from './BuycarContext';
import PayBt from './PayBt';

function Buycar() {
    const [list, totalCost, dispatch] = useBuycarData();

    return (
        <BuycarContext.Provider value={{ list, totalCost,dispatch }} >
            <div style={{width:'900px',margin:'50px auto'}}>
                <List />
                <PayBt />
                <hr style={{margin:'30px 0'}} />

            </div>
        </BuycarContext.Provider>
    )
}

export default Buycar
