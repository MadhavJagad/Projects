import { createContext, useReducer, useState } from "react";

export const ProductListContext = createContext();

const productReducer = (currentState, action) => {
  if (action.type == "INT_PRODUCT") {
    return (currentState = action.payload.products);
  }
};

const ProductListContextProvider = ({ children }) => {
  const [productList, productListDispatch] = useReducer(productReducer, []);


  const setProductList = (products) => {
    const productList = {
      type: "INT_PRODUCT",
      payload: { products },
    };
    productListDispatch(productList);
  };

  return (
    <ProductListContext.Provider
      value={{ productList, setProductList }}
    >
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListContextProvider;
