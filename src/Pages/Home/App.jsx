import { useEffect, useState } from 'react';
import logo from '../../Assets/logo.png'
import Banner from '../../Components/Banner/Banner.jsx';
import Cart from '../../Components/Cart/Cart';
import Footer from '../../Components/Footer/Footer';
import ShoppingList from '../../Components/ShoppingList/ShoppingList';
import '../Home/App.css'


function App() {
  const localCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(localCart ? JSON.parse(localCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner>
        <img src={logo} alt='Logo de la maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
