import React from "react";
import { Route, Routes} from "react-router-dom";
import Content from "../Content/Content";
import Tutorials from '../Tutorials/Tutorials';
import References from '../References/References';
import Exercises from '../Exercises/Exercises';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

const Navigation = ({Items, cartItems, Add, setCount}) => {
    return (
        <>
            <Routes>
                    <Route index element={<Content Items={Items} Add={Add} setCount={setCount}/>}/>
                    <Route exact path='/tutorials' element={<Tutorials />}/>
                    <Route exact path='/references' element={<References />}/>
                    <Route exact path='/exercises' element={<Exercises/>}/>
                    <Route exact path='/register' element={<Register />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/cart' element={<Cart cartItems={cartItems} Add={Add}/>}/>
            </Routes>
        </>
    );
}

export default Navigation;