import React, {useContext} from 'react';
import {Data} from './DataContext'
import Item from './Item'

const Shop = () => {

    const [Items, handlecart] = useContext(Data);
    return (
        <div className="cards">
            {Items.map( item => <Item key={item.id} id={item.id} handlecart={handlecart} name={item.name} Alt={item.image_title} image={item.image} price={item.price} />)}
        </div>
    )
}

export default Shop
