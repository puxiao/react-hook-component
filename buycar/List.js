import React, { useContext } from 'react'
import ListItem from './ListItem'
import BuycarContext from './BuycarContext'

function List() {
    const buycarContext = useContext(BuycarContext);
    return (
        <div>
            {
                buycarContext.list.map((value, index) => {
                    return <ListItem
                        key={`item${index}`}
                        value={value}
                        dispatch={buycarContext.dispatch}
                    />
                })
            }
        </div>
    )
}

export default List
