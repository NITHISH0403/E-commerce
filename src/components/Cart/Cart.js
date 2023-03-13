import React from "react";
import './Cart.css';

const Cart = ({cartItems, Remove, setCount}) => {
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
                        <div class="remove">
                                <h3 onClick={()=>{Remove(item);setCount((count)=>count-1)}}>Remove</h3>
                        </div>
                    </div>
                </>
                ))}   
        </div>
    );
}

export default Cart;