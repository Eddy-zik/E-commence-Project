// import logo from './logo.svg';
import './App.css';
// import Products from './Components/Main/Product'
// import { productData2 } from './Data/Data-2';
import Allcategories from './Components/Allcategories';
import Computerandaccessories from './Components/Computerandaccessories';
import FooterComp1 from './Components/FooterComp1';
import FooterComp2 from './Components/FooterComp2';
import NavComp1 from './Components/NavComp1';
import NavComp2 from './Components/NavComp2';
import Body1 from './Components/Main/Body1';
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavComp1 />
      <NavComp2 />
      <Body1/>
      {/* <Routes>

         <Route path='/' element={} />
         <Route path='/' element={} />
         <Route path='/' element={} />
         <Route path='/' element={} />
         <Route path='/' element={} />

      </Routes> */}
     
      <FooterComp1 />
      <FooterComp2 />
      {/* <p>copyright @ 2022 Konga.com. All rights reserved</p> */}
    </div>
  );
}

export default App;
