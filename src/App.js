import "./App.css";
import Cart from "./components/cart/Cart";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Main from "./components/mainbody/main/Main";
import Nav from "./components/nav/Nav";
import ProductCarousel from "./components/productCarousel/ProductCarousel";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <ProductCarousel />
      <Main />
      <Cart/>
    </div>
  );
}

export default App;
