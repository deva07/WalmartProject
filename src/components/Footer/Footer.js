import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <div className='Footer-container'>
          <div className='Footer-top'>
            <p> We’d love to hear what you think! </p>
            <button> Give Feedback </button>
          </div>
        </div>
        <div className='Footer-bottom'>
          <Link to='AllDepartments' className='AllDepartments'>
            <p> All Departments </p>
          </Link>
          <Link to='StoreDirectory' className='StoreDirectory'>
            <p> Store Directory </p>
          </Link>
          <Link to='careers' className='Careers'>
            <p> Careers </p>
          </Link>
          <Link to='OurCompany' className='OurCompany'>
            <p> Our Company </p>
          </Link>
          <Link to='SellOn' className='SellOn'>
            <p> Sell on Walmart.com </p>
          </Link>
          <Link to='help' className='Help'>
            <p> Help </p>
          </Link>
          <Link to='VaccineScheduler' className='VaccineSchedular'>
            <p> COVID-19 Vaccine Scheduler </p>
          </Link>
          <Link to='productRecalls' className='ProductRecalls'>
            <p> Product Recalls </p>
          </Link>
          <Link to='Accessibility' className='Accessibility'>
            <p> Accessibility </p>
          </Link>
          <Link to='TaxExempt' className='TaxExempt'>
            <p> Tax Exempt Program </p>
          </Link>
        </div>
        <div className='Footer-bottom-middle'>
          <p> Get the Walmart App </p>
          <p> Sign-up for Email </p>
          <p> Safety Data Sheet </p>
          <p> Terms of Use </p>
          <p> Privacy & Security </p>
          <p> CA Privacy Rights </p>
          <p> California Supply Chain Act </p>
          <p> Your Privacy Choices </p>
        </div>
        <div className='Footer-middle-end'>
          <p> Request My Personal Information </p>
          <p> #IYWYK </p>
        </div>
        <div className='Footer-End'>
          <p> © 2023 Walmart. All Rights Reserved. </p>
        </div>
      </div>
    </>
  )
}

export default Footer;