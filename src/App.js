import React, { useState, useMemo, createContext, useContext } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Data from "./components/Data/Data";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';

const UserContext = createContext();

const App = () => {
  const {Items} = Data;

  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  // add cart funtional components
  
  const Add = (props) => {
    const LearnItems = cartItems.find((Items) => Items.id === props.id);
    // check the store the cart already store the items is REMOVE the cart and decrement . otherwise, store the item in cart and 
    if(LearnItems){
      alert("Conform to remove the cart.");
      Remove(LearnItems);
    }
    else{
      setCartItems([...cartItems, {...props}]);
      console.log(props);
    }
  };


  const Remove = (value) => {
    const LearnItems = cartItems.find((Items) => Items.id === value.id);
    if(LearnItems){
      setCartItems(cartItems.filter(props => props !== value));
    }
  };

  const Button = (index) =>{
    const changeButton = cartItems.findIndex((Items) => Items.id === index.id);
    return changeButton >=0;
  }

  const cartItemCount = useMemo(() => cartItems.length, [cartItems]);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{cartItemCount, Items, cartItems, Add, Remove, Button}}>
          <Header/>
          <Navigation/>
          <Footer/> 
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export function useUserContext(){

  return useContext(UserContext);

}

export default App;
