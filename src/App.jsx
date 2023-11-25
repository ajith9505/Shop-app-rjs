import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'


function App() {

  const [cartItems, setCartItems] = useState(0);

  // Function for increase and decrease cart 
  function cartItemsCount(addCart) {
    if (addCart) {
      setCartItems(cartItems + 1);
    }
    else {
       setCartItems( cartItems - 1);
    }
  }

// Product details
const products = [
  { id: 1, name: 'Fancy product', price: 80.00 },
  { id: 2, name: 'Special Item', price: 18.00 },
  { id: 3, name: 'Sale Item', price: 25.00 },
  { id: 4, name: 'Popular Item', price: 40.00 },
  { id: 5, name: 'Sale Item', price: 25.00 },
  { id: 6, name: 'Fancy product', price: 80.00 },
  { id: 7, name: 'Special Item', price: 18.00 },
  { id: 8, name: 'Popular Item', price: 40.00 }]


return (
  <div>
    <Navbar cart={cartItems} />
    <Header />
    <Section products={products} cartItemsCount={cartItemsCount}/>
    <Footer />
  </div>
)
}

export default App