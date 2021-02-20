import React, {useState, useEffect, createContext} from 'react';

export const Data = createContext();

export const DataContext = (props) => {
  const [Items, setItems] = useState([]);

  const [Cart, setCart] = useState([]);

  const handlecart = (event) => {

    let exist = undefined;
    for (let i = 0; i < Cart.length; i++) {
      if (Cart[i].id === event.target.value) {
        exist = i;
        break;
      }
    }

    let index = {};

    for (let i = 0; i < Items.length; i++) {
      if (Items[i].id === event.target.value) {
        index = Items[i];
        break;
      }
    }

    if (exist === undefined) {
        setCart(prevItems => [...prevItems, index] )
      } 
  }

  useEffect(() => 
    FetchData()
  , [])

  const FetchData = async () => {
    const Data = await fetch('https://hplussport.com/api/products/order/price')
    const fetched = await Data.json()
    setItems(fetched);
  }


  return (
    <Data.Provider value={[Items, handlecart, Cart, setCart]} >
      {props.children}
    </Data.Provider>
  )
}