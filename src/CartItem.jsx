import React from 'react';

const Item = (props) => {
    return (
        <div className="card">
            <img className="image" src={props.image} alt={props.image_title} />
            <div className="detail">
                <h4 className="floatname"><b>{props.name}</b></h4>
                <h4 className="float">{props.price} $</h4>
            </div>
            <button className="button" value={props.id} onClick={props.handleCart} >Remove from Cart</button>
        </div>
    )
}

export default Item