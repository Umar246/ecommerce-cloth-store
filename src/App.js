import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Footer from "./customer/components/Footer/Footer";
import Navbar from "./customer/components/Navbar";
// import Product from "./customer/components/Product/Product";
// import ProductDetail from "./customer/components/ProductDetail/ProductDetail";
// import Home from './customer/pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductDetail /> */}
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;
