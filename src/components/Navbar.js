import React from 'react'
import {BsBasket} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const {quantity} = useSelector((store) => store.cart)

  return (
    <nav>
        <div className='navDiv'>
            <h3>Kurs Uygulamasi</h3>
            <div className='rightNav'>
                <p>{quantity}</p>
                <BsBasket className='items-icon'/>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar