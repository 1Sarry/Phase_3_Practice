
import './App.css';
import Alert from './Components/Alert/Alert';
import AppleProduct from './Components/AppleProduct/AppleProduct';
import NavBar from './Components/Common/NavBar/NavBar';
import Footer from './Components/Common/Footer/Footer';
import Cards from './Components/ProductCards/Cards';
import ProductCards1 from './Components/ProductCards/ProductCards1';
import ProductCards2 from './Components/ProductCards/ProductCards2';
import ProductCard3 from './Components/ProductCards/ProductCard3';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Alert/>
      <AppleProduct
      className="first-hightlight-wrapper"
      className2="black"
      Bgimage="ipodPronew.jpg"
      Bgimage2="/ipodPronew-sm.jpg"
      alert="New"
      ProdName="iPad Pro"
      BtnMore="Learn more"
      BtnBuy="Buy"
      />
      <AppleProduct
      className="second-hightlight-wrapper"
      className2="black"
      Bgimage="macbookair-new.jpg"
      Bgimage2="macbookair-new-sm.jpg"
      alert="New"
      ProdName="MacBook Air"
      PrdDesc="Twice the speed. Twice the storage."
      ProdPrice="From $999."
      BtnMore="Learn more"
      BtnBuy="Buy"
      />
      <AppleProduct
      className="third-hightlight-wrapper"
      Bgimage="macbookair-new.jpg"
      Bgimage2="macbookair-new-sm.jpg"
      ProdName="iPhone 11 Pro"
      PrdDesc="Pro cameras. Pro display. Pro performance."
      ProdPrice="From $24.95/mo. or $599 with trade‑in."
      BtnMore="Learn more"
      BtnBuy="Buy"
      />
      <ProductCards1/>
      <ProductCard3/>
      <ProductCards2/>


      <Footer/>
    </div>
  );
}

export default App;
