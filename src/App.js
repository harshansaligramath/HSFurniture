import "./App.css";
import Header from "./component/header/Header";
import Pages from "./pages/Pages";
import Data from "./component/Data";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart/Cart";
import Footer from "./component/Footer/Footer";

// import InfoCard from './component/InfoCard/InfoCard';

function App() {
  const { productItems, TrendingOfferDetails } = Data;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      {/* blur of background  in all pages */}
      <div className="blur" style={{ top: "-10%", right: "0" }}></div>
      <div className="blur" style={{ top: "86%", left: "-8rem" }}></div>

      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                TrendingOfferDetails={TrendingOfferDetails}
              />
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
