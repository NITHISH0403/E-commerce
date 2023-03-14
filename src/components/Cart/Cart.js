import React from "react";
import './Cart.css';

const Cart = ({cartItems, Remove}) => {
    return (
        <div className="body">
            <h1>Cart Items</h1>

            {cartItems.length === 0 && (
                <h2>No Items are added.</h2>
            )}

            {cartItems.map((item,index) =>(
                <>
                    <div key={item.id} className="image">
                        <img alt={item.name} src={item.image}/>
                        <p className="cost">{item.cost}</p>
                        <p>{item.learn}</p>
                        <h3 className="remove" key={item.id} onClick={()=>{Remove(item)}}>Remove</h3>
                    </div>
                </>
                ))}   
        </div>
    );
}

export default Cart;