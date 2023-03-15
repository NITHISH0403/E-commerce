import React from "react";
import { Route, Routes} from "react-router-dom";
import Content from "../Content/Content";
import Tutorials from '../Tutorials/Tutorials';
import References from '../References/References';
import Exercises from '../Exercises/Exercises';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

const Navigation = (props) => {
    const {Items, cartItems, Add, Remove, Button} = props;
    return (
        <>
            <Routes>
                    <Route index element={<Content Items={Items} Add={Add} Button={Button}/>}/>
                    <Route exact path='/tutorials' element={<Tutorials />}/>
                    <Route exact path='/references' element={<References />}/>
                    <Route exact path='/exercises' element={<Exercises/>}/>
                    <Route exact path='/register' element={<Register />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/cart' element={<Cart cartItems={cartItems} Remove={Remove}/>}/>
            </Routes>
        </>
    );
}

export default Navigation;