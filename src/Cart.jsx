import React, {useContext} from 'react';
import {Data} from './DataContext'
import CartItem from './CartItem'

const Cart = () => {
    const [Items , handlecart, Cart, setCart] = useContext(Data);

    const handleCart = (event) => {
        setCart(prevCart => prevCart.filter(item => item.id !== event.target.value))
    }
    const totalPrice = 0;
    return (
        <div>
            <h4 className="price">Total Price: {Cart.map((item) => Number(item.price)).reduce(function(tot, cur) { return tot + cur }, 0)}</h4>
            <div className="cards">
                {Cart.map(item => <CartItem key={item.id} handleCart={handleCart} id={item.id} name={item.name} Alt={item.image_title} image={item.image} price={item.price} />)}
            </div>
        </div>
    )
}

export default Cart