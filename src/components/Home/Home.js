import React from 'react';
import JewelImage from '../../assets/Jewel.jpg';
import MomPicture from '../../assets/mom.jpg';
import './Home.css';
import Handbag from '../../assets/Hand Bag.jpg';
import Dress from '../../assets/Dress.jpg';
import NestMini from '../../assets/Google Nest Mini.jpg';
import FlashPicks from '../../assets/Flash Picks.webp';
import Gardentool from '../../assets/Garden Tool.jpg';
import Perfume from '../../assets/Perfume.jpg';
import TravelBag from '../../assets/Travel Bag.jpg';
// import AirMatress from '../../assets/Air Mattress.jpg';
// import Sofa from '../../assets/sofa.jpg';
import Projector from '../../assets/projector.jpg';
import SofaImage from '../../assets/Sofa Image .jpeg';
import AirPods from '../../assets/AirPods.webp';
import WaterCan from '../../assets/flowers-watering-can.jpg';
import Rubber from '../../assets/rubber-ring-blue-swimming-pool.webp';
import ProductCarosual from '../Banner Carosual/ProductCarosual';
import MultiSlider from '../MultiSlider/MultiSlider';
import { Link } from 'react-router-dom';
import MultiCarousal from '../Slider/MultiCarosual/MultiCarosual';

function Home() {
  return (
    <>
      <div className='Banner-image'>
        <div className='BannerImage-Container'>
          <div className='Jewel-Product'>
            <Link to='JewelProduct' style={{ textDecoration: 'none', color: 'black' }}>
              <img src={JewelImage} alt='Jewel' className='Jewel'></img>
              <p className='Jewel-text'> Jewelry under $100 </p>
              <p className='Jewel-shop'> Shop Now</p>
            </Link>
          </div>
          <div className='MomGift-Product'>
            <Link to='MomGiftProduct' style={{ textDecoration: 'none', color: 'white' }}>
              <img src={MomPicture} alt="Mom" class='Mom-Image'></img>
              <p className='Mom-text'>Gift she'll love <br /><span className='Mom-subText'> All for Mom </span></p>
              <button className='Gift-shop'>Shop Now</button>
            </Link>
          </div>
          <div className='BagImage'>
            <Link to='HandBagsProduct' style={{ textDecoration: 'none', color: 'black' }}>
              <img src={Handbag} alt="Handbag" class='Bag-Image'></img>
              <p className='Bags'> Bags Under $50</p>
              <p className='Bag-shop'>Shop Now</p>
            </Link>
          </div>
        </div>
        <div className='banner-middle-image'>
          <div className='middle-left-image'>
            <Link to='DressProduct'>
              <img src={Dress} alt='woman Dress' class='Dress'></img>
              <p className='Dress-text'>  vacay <br /> Styles </p>
              <button className='Dress-shop'> Shop Now </button>
            </Link>
            <img src={NestMini} alt='Google Nest Mini' className='NestMini'></img>
            <img src={FlashPicks} alt='Flash picks ' className='FlashPicks'></img>
            <img src={Gardentool} alt="garden tools" className='GardenTool'></img>
          </div>
        </div>
        <div className='banner-middle-middle'>
          <div className='middle-left'>
            <img src={Perfume} alt="women Perfume" className='Perfume'></img>
            <img src={MomPicture} alt='mom' className='MomPicture'></img>
            <img src={TravelBag} alt='Travel bag' className='TravelBag'></img>
          </div>
        </div>
      </div>
      <div>
        <ProductCarosual />
      </div>
      <div>
        <MultiSlider />
      </div>
      <div className='Banner-Middle-Strip'>
        <div className='Middle-banner'>
          <Link to='SofaProduct'>
            <img src={SofaImage} alt='' className='sofa-image'></img>
            <p className='sofa-text'> The <br /> outdoor <br /> lounge </p>
            <button className='sofa-shop'> Shop Now</button>
          </Link>
        </div>
        <div className='Projector Image'>
          <Link to='ProjectorProduct' style={{ textDecoration: 'none' }}>
            <img src={Projector} alt='' className='Projector-Image'></img>
            <p className='Projector-text'> Now starring :</p>
            <p className='projector'> Projector <br /> From $122</p>
            <p className='shop'> Shop Now </p>
          </Link>
        </div>
        <div className='AirPods-Image'>
          <Link to="AirpodsProduct">
            <img src={AirPods} alt='' className='AirPods'></img>
            <p className='Airpods-text'> Upgrade tech</p>
            <p className='Airpods-shop'> Shop Gift </p>
          </Link>
        </div>
      </div>
      <div className='middle-strip'>
        <div className='water-can-flower'>
          <Link to='FlowerWaterCan' style={{ textDecoration: 'none', color: 'black' }}>
            <img src={WaterCan} alt='' className='WaterCan-Image'></img>
            <p className='water-can-details'> Sow & <br /> grow </p>
            <p className='water-can-price'> from <br /> $32</p>
          </Link>
        </div>
        <div className='rubber-ring'>
          <Link to='RingSwimmingPool'>
            <img src={Rubber} alt='' className='swimming-rubber' />
            <p className='rubber-text'> Make waves & <br /> save</p>
            <p className='rubber-shop'> Shop Now </p>
          </Link>
        </div>
      </div>
      <div>
        <MultiCarousal />
      </div>
    </>
  )
}

export default Home