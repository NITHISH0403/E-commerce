import React, { useState } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Data from "./components/Data/Data";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';

const App = () => {
  const {Items} = Data;

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  // add cart funtional components
  
  const Add = (props) => {
    const LearnItems = cartItems.find((Items) => Items.id === props.id);
    // check the store the cart already store the items is REMOVE the cart and decrement . otherwise, store the item in cart and 
    if(LearnItems){
      Remove(LearnItems);
      console.log(cartItems);
    }
    else{
      setCartItems([...cartItems, {...props, count: 1}]);
      setCount((count)=>count+1);
      console.log(props);
    }
  };


  const Remove = (value) => {
    const LearnItems = cartItems.find((Items) => Items.id === value.id);
    if(LearnItems){
      alert("Conform to remove the cart.");
      setCartItems(cartItems.filter(props => props !== value));
      setCount((count)=>count-1);
      console.log(cartItems);
    }
  };

  return (
    <>
      <BrowserRouter>
          <Header count={count} />
          <Navigation  Items = {Items} cartItems={cartItems} Add={Add} Remove={Remove}/>
          <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
