import React from 'react';
import './TShirt.css'
const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name,price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h3>Price: ${price}</h3>
            <button onClick={ ()=> handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;