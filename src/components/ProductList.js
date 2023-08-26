import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'
import { clearCart } from '../control/cartSlice' 

const ProductList = () => {

  const dispatch = useDispatch()

  const {cartItems, quantity, total} = useSelector((store) => store.cart)

  return (
    <>
    {
      quantity < 1 ? (
        <section>
          <header>
            <h2>Products</h2>
            <h4>There is nothing in your cart.</h4>
          </header>
        </section>
      )
      :
      (
        <section>
          <header>
            <h2>Products</h2>
          </header>
          <div className='products'>
            {cartItems.map((item) => {
              return <Product {...item} key={item.id} />
            })}
          </div>
          <footer>
            <hr />
            <div className='footerDiv'>
              <h4>Total Price: <span>${total.toFixed(2)}</span></h4>
            </div>
            <button className='clearButton' onClick={()=>dispatch(clearCart())}>Clear</button>
          </footer>
        </section>
      )
    }
    </>
  )
}

export default ProductList