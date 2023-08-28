
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/productList'
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './control/cartSlice';


function App() {

  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])
  

  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
    </div>
  );
}

export default App;
