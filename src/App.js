
import React from 'react';
import Header from './components/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signin from './components/Login/Signin';
import Deals from './Pages/Deals/Deals';
import MothersDay from './Pages/MothersDay/MothersDay';
import Grocery from './Pages/Grocery/Grocery';
import Homes from './Pages/Homes/Homes';
import Auto from './Pages/Auto/Auto';
import Tech from './Pages/Tech/Tech';
import Registry from './Pages/Registry/Registry';
import Fashion from './Pages/Fashion/Fashion';
import Footer from './components/Footer/Footer';
import Help from './components/Footer/Help/Help';
import Careers from './components/Footer/Careers/careers';
import DogProduct from './components/ProductDetails/DogProduct/DogProduct';
import JewelProduct from './components/ProductDetails/JewelProduct/JewelProduct';
import MomGiftProduct from './components/ProductDetails/MomGiftProduct/MomGiftProduct';
import HandBagsProduct from './components/ProductDetails/HandBagsProduct/HandBagsProduct';
import SofaProduct from './components/ProductDetails/SofaProduct/SofaProduct';
import ProjectorProduct from './components/ProductDetails/ProjectorProduct//ProjectorProduct';
import FlowerWaterCan from './components/ProductDetails/FlowerWaterCan/FlowerWaterCan';
import RingSwimmingPool from './components/ProductDetails/RingSwimmingPool/RingSwimmingPool';
import Cart from './components/Cart/Cart';
import { Product } from './components/MultiSlider/Product';
import ScrolltoTop from './components/ScrolltoTop';
import ProductSlider from './components/Banner Carosual/ProductSlider';
// import ListDetails from './components/Slider/MultiCarosual/ListDetails';

function App() {

  return (
    
     <>
       <BrowserRouter>
        <ScrolltoTop />
       <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/ProductSlider/:id' element={<ProductSlider />}/>
          <Route path='/Product/:id' element={<Product />}/>
          {/* <Route path='/ListDetails/:id' element={<ListDetails />} */}
          <Route path='deals' element={<Deals />} />
          <Route path='Mother Day' element={<MothersDay />} />
          <Route path='grocery' element={<Grocery />} />
          <Route path='Homes' element={< Homes />} />
          <Route path='tech' element={<Tech />} />
          <Route path='auto' element={<Auto />} />
          <Route path='registry' element={<Registry />} />
          <Route path='fashion' element={<Fashion />} />
          <Route path='help' element={<Help />} />
          <Route path='careers' element={<Careers />} />
          <Route path='DogProduct' element={<DogProduct />} />
          <Route path='JewelProduct' element={<JewelProduct />} />
          <Route path='MomGiftProduct' element={<MomGiftProduct />} />
          <Route path='HandBagsProduct' element={<HandBagsProduct />} />
          <Route path='SofaProduct' element={<SofaProduct/>} />
          <Route path="ProjectorProduct" element={<ProjectorProduct />} />
          <Route path='FlowerWaterCan' element={<FlowerWaterCan />} />
          <Route path='RingSwimmingPool' element={<RingSwimmingPool />} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </> 
  );
}

export default App;
