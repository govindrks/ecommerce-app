import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetails from "./components/ProductDetails";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
