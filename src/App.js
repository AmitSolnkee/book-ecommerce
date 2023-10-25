import "./App.css";
import Address from "./components/address/Address";
import Cart from "./components/cart/Cart";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Main from "./components/mainbody/main/Main";
import Nav from "./components/nav/Nav";
import Payment from "./components/payment/Payment";
import { Route, Routes } from "react-router-dom";
import ViewProduct from "./components/viewproduct/ViewProduct";
import ViewOrder from "./components/payment/ViewOrder";


function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product" element={<ViewProduct />} />
        <Route path="/order" element={<ViewOrder/>}/>
      </Routes>
    </div>
  );
}

export default App;
