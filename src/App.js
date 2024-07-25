import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./customer/components/Footer/Footer";
// import Navbar from "./customer/components/Navbar";
import CustomerRoutes from "./Routes/CustomerRoutes";
// import OrderDetails from "./customer/components/Orders/OrderDetails";
// import Checkout from "./customer/components/Checkout/Checkout";
// import Orders from "./customer/components/Orders/Orders";
// import Cart from "./customer/components/Cart/Cart";
// import Product from "./customer/components/Product/Product";
// import ProductDetail from "./customer/components/ProductDetail/ProductDetail";
// import Home from './customer/pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>

      {/* <div className="flex-1 min-h-screen mb-0"> */}
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductDetail /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Orders /> */}
        {/* <OrderDetails /> */}
      {/* </div> */}
    </>
  );
}

export default App;
