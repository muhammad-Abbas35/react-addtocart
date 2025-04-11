import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import { Home } from "./Components/Home";
import { Cart } from "./Components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./Components/data";
import Contact from "./Components/Contact";
const App = () => {
  const [productID, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    const filterObject = productList.filter(
      (product) => product.id == productID
    );
    setCartAllProduct([...cartAllProduct, ...filterObject]);
  }, [productID]);

  return (
    <>
      <BrowserRouter>
        <Header cartAllProduct={cartAllProduct} />
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProductId} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartAllProduct={cartAllProduct}
                setCartAllProduct={setCartAllProduct}
              />
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
