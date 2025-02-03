import React, { useContext, useEffect } from "react";
import { ProductListContext } from "../Store/ProductContext";
import Product from "./Product";

const ShowProduct = () => {
  const { productList, setProductList } = useContext(ProductListContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList(data.products);
      })
      .catch((err) => {
        console.error("An error occurred while fetching data:", err);
      });
  }, []);

 

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trendy Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3"> 
          {productList.map((products) => {
            return (
              <Product
                key={Math.random()}
                products={products}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
