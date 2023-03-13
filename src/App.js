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
  
  const Add = (props) => {
    const LearnItems = cartItems.find((Items) => Items.id === props.id);
    console.log(Items.id, props.id);
    if(LearnItems){
      setCartItems(cartItems.map((Items => Items.id === props.id ? {...LearnItems, count: props.count +1 }: Items)));
      console.log(LearnItems);
      console.log(cartItems);
    }
    else{
      setCartItems([...cartItems, {...props, count: 1}])
    }
  };

  return (
    <>
      <BrowserRouter>
          <Header count={count} />
          <Navigation  Items = {Items} cartItems={cartItems} Add={Add} setCount={setCount}/>
          <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
