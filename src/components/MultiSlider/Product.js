import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/petSlice';
import { ToastContainer, toast } from 'react-toastify';

export const Product = () => {

  const dispatch = useDispatch();

  const [details, setdetails] = useState({});

  let [baseQty, setbaseQty] = useState(1);

  const location = useLocation(); 

  useEffect(() => {

    setdetails(location.state.list); // to use locate the list product to show object (or) data list in page.
    // console.log(location.state.list);

  }, [location]);
  // console.log(details);
  return (
    <div>
      <div style={{ display: 'flex', maxWidth: '1280px', margin: '2rem auto', gap: '5rem' }}>
        <div style={{ width: '40%', position: 'relative' }}>
          <img style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            src={details.image} alt="productImg" />
        </div>
        <div className='ProductDescription'>
          <div>
            <h2 className='Product-title'>{details.Title}</h2>
            <div className='Product-price'>
              <p className='Product-oldPrice'>${details.oldPrice}</p>
              <p className='Product-Newprice'>$ {details.Price}</p>
            </div>
          </div>
          <div className='Product-Rate'>
            <div style={{ display: 'flex' }}>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p style={{ color: 'gray', fontWeight: '500', fontSize: '15px' }}> (1 Customer review)</p>
          </div>
          <p className='Product-About'>{details.AboutData}</p>
          <div>
            <div className='Product-Quantity'>
              <p className='Quantity'>Quantity</p>
              <div className='Product-btn'>
                <button className='Product-Minus'
                  onClick={() => setbaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)}>-</button>
                <span>{baseQty}</span>
                <button className='Product-Add' onClick={() => setbaseQty(baseQty + 1)}>+</button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(addToCart(
                  {
                    _id: details.id,
                    Title: details.Title,
                    image: details.image,
                    Price: details.Price,
                    quantity: baseQty,
                    Details: details.Details,
                  })
                ) & toast.success(`${details.Title} is added`)
              }
              className='Product-addTocart'> add to cart </button>
          </div>
        </div>
      </div>
      <ToastContainer
      position='top-left'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      trl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      />
    </div>
  )
}
