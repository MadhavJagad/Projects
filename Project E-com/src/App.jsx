import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductListContextProvider, {
  ProductListContext,
} from "./Store/ProductContext";
import { Outlet } from "react-router-dom";

const App = () => {



  return (
    <>
      <ProductListContextProvider>
        <Header />
        <Outlet></Outlet>
        <Footer />
      </ProductListContextProvider>
    </>
  );
};

export default App;
