import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import './Cart.css';

const Cart = () => {

  const productData = useSelector((state) => state.DogProduct.productData);

  const [totalAmt, settotalAmt] = useState(" ");

  useEffect(() => {
    let Price = 0;
    productData.map((list) => {
      Price += list.Price * list.quantity;
      return Price;
    });
    settotalAmt(Price);
  }, [productData]);

  return <div>
    <div className='Cart-CartItem'>
      <CartItem />
      <div className='Cart'>
        <div className='CartTotal-Container'>
          <h2 className='Cart-Total'>cart totals</h2>
          <p className='Subtotal'> Subtotal{" "}
            <span className='Subtotls-Price'>$ {totalAmt}</span>
          </p>
        </div>
        <p className='Cart-TotalAmount'> Total <span className='Total-price'>$ {totalAmt}</span></p>
        <button className='checkout'> Proceed to checkOut</button>
      </div>
    </div>
  </div>
};

export default Cart;