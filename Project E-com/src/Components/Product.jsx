import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img
              className="img-fluid w-100"
              src={products?.thumbnail}
              alt=""
            />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{products?.title}</h6>
            <div className="d-flex justify-content-center">
              <h6>$ {products?.price}</h6>
              <h6 className="text-muted  ml-2">
                <span>{products?.discountPercentage} % OFF </span>
              </h6>
            </div>
          </div>
          <div className=" d-flex justify-content-between  ">
            <button>
              <Link
                to={"/details"}
                state={products?.id}
                className="btn btn-sm text-dark p-0"
              >
                <i className="fa fa-eye text-primary mr-1"></i>View Detail
              </Link>
            </button>
            <button>
              <a
                href=""
                className="btn btn-sm text-dark p-0"
              >
                <i className="fa fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
