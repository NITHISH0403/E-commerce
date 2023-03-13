import React from "react";
import './Cart.css';

const Cart = ({cartItems}) => {
    return (
        <div className="body">
            <h1>Cart Items</h1>

            {cartItems.length === 0 && (
                <h2>No Items are added.</h2>
            )}

            {cartItems.map((item) =>(
                <>
                    <div key={item.id} className="image">
                        <img alt={item.name} src={item.image}/>
                        <p class="cost">{item.cost}</p>
                        <p>{item.learn}</p>
                    </div>
                </>
                ))}   
        </div>
    );
}

export default Cart;