import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveItem}) => {


let message;
if(cart.length === 0){
    message = <p>Buy At least 1 item :(</p>
}
else{
    message = <p>Thanks For buying :)</p>
}

    return (
        <div>
            <h3>Order Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue':'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>
                )
            }
            {message}
        </div>
    );
};

export default Cart;