import React from 'react';
import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { deleteItem, incrementQuantity, resetCart } from '../redux/petSlice';
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { decrementQuantity } from '../redux/petSlice';

const CartItem = () => {

  const dispatch = useDispatch();

  const productData = useSelector((state) => state.DogProduct.productData);

  return (
    <div className='CartItem'>
      <div style={{ width: '100%' }}>
        <h2 className="Shop-Cart"> Shopping Cart </h2>
      </div>
      <div>
        {
          productData.map((list) => (
            <div key={list.id} className='Shop-Container'>
              <div className='Item-list'>
                <MdOutlineClose onClick={() => dispatch(deleteItem(list._id)) &
                  toast.error(`${list.Title} is removed`)}
                  className='Close-icon' />
                <img className='Shop-Image'
                  src={list.image} alt="CartImage" />
              </div>
              <h2 className='Cart-Title'>{list.Title}</h2>
              <p className='Cart.Price'> ${list.Price}</p>
              <div className='Shop-Quantity'>
                <p className='Quantity-container'>Quantity</p>
                <div className='Cart-btn'>
                  <span
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: list._id,
                          Title: list.Title,
                          image: list.image,
                          Price: list.Price,
                          quantity: 1,
                          Details: list.Details,
                        })
                      )
                    }
                    className='Cart-Minus'>-</span>
                  {list.quantity}
                  <span
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: list._id,
                          Title: list.Title,
                          image: list.image,
                          Price: list.Price,
                          quantity: 1,
                          Details: list.Details,
                        })
                      )
                    }
                    className='Cart-Add'>+</span>
                </div>
              </div>
              <p style={{ width: '56px' }}> ${list.quantity * list.Price} </p>
            </div>
          ))
        }
      </div>
      <button onClick={() => dispatch(resetCart()) & toast.error('Yours Cart is Empty!..')}
        className='reset-Cart'> Reset Cart</button>
      <Link to='/' style={{textDecoration:'none'}}>
        <button className='Go-shop'>
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go shopping
        </button>
      </Link>
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

export default CartItem;