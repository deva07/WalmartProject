import React, { useState } from 'react';
import logo from '../assets/Image.png';
import './Header.css';
import { FaLayerGroup, } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSquares2X2 } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsCalendar2HeartFill, BsPersonHearts } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { Link } from 'react-router-dom';
import handphone from '../assets/Hand phone.webp';
import LoginModel from './LoginModel/LoginModel';
import { useSelector } from 'react-redux';

const Header = () => {

    const productData = useSelector((state) => state.DogProduct.productData);

    // console.log(productData);

    const [isOpen, setIsOpen] = useState(false);

    const [icon, seticon] = useState(false);

    const handleClick = () => {
        seticon(!icon)
    }
    return (
        <div className='Header-Part'>
            <div className='Header'>
                <div className="App-header">
                    <Link to='/'>
                        <img src={logo} className="Walmart-Image" alt="logo" />
                    </Link>
                </div>
                <div className='department'>
                    <FaLayerGroup className='icon' />
                    <p className='para'>Departments</p>
                </div>
                <div className='service'>
                    <HiSquares2X2 className='icon' />
                    <p>Services</p>
                </div>
                <div className='searchBox'>
                    <input type='search' className='search' placeholder='Search ' />
                    <button type='sumbit'> <FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="App-header">
                    <div className='myitems'>
                        <BsCalendar2HeartFill className='icon' />
                        <p> <span className='split-para'>Recorder </span> <br /> My Items </p>
                    </div>
                    <div className='signin' onClick={() => setIsOpen(true)}>
                        <BsPersonHearts className='icon' />
                        <p> <span className='split-para'> Sign In </span> <br /> Account </p>
                    </div>
                    <div className='cartbox'>
                        <Link to='cart' style={{textDecoration:'none',color:'white'}}>
                        <AiOutlineShoppingCart className='cart' />
                        <span className='cart-counter'>{productData.length}</span>
                        {/* <span className='cart-dollar'>$0.00</span> */}
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        {
                            icon ? <FaTimes className='fa-times'></FaTimes>
                                : <FaBars className='fa-bars'></FaBars>
                        }
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className='SubHeader'>
                <div className='SubHeader-container'>
                    <img src={handphone} alt='walmart hand' className='Hand-Image'></img>
                    <p>How do you want your items?</p><span className='slap-icon'>|</span>
                </div>
                <div className='SubHeader-Location'>
                    <SlLocationPin />
                    <p>Sacramento,95829</p>
                </div>
                <div className='SubHeader-Area'>
                    <SiHomeassistantcommunitystore />
                    <p>Sacramento Supercenter</p>
                </div>
                <nav className='SubHeader-navbar'>
                    <div>
                        <Link to='deals' className='Deals'>
                            <p> Deals </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='mothersday' className='MotherDay'>
                            <p> Mother's Day </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='grocery' className='Grocery'>
                            <p> Grocery & essentials </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='homes' className='Homes'>
                            <p> Home </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='tech' className='Tech'>
                            <p> Tech </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='fashion' className='Fashion'>
                            <p> Fashion </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='auto' className='Auto'>
                            <p> Auto </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='registry' className='Registry'>
                            <p> Registry </p>
                        </Link>
                    </div>
                </nav>
            </div>
            <LoginModel isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

    )
};

export default Header;