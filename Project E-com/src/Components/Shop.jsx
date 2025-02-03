import React from "react";
import ShowProduct from "./ShowProduct";
import Product from "./Product";

const Shop = () => {
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-2 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked=""
                    id="price-all"
                  />
                  <label
                    className="custom-control-label"
                    for="price-all"
                  >
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label
                    className="custom-control-label"
                    for="price-1"
                  >
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label
                    className="custom-control-label"
                    for="price-2"
                  >
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label
                    className="custom-control-label"
                    for="price-3"
                  >
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label
                    className="custom-control-label"
                    for="price-4"
                  >
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label
                    className="custom-control-label"
                    for="price-5"
                  >
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>

            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked=""
                    id="color-all"
                  />
                  <label
                    className="custom-control-label"
                    for="price-all"
                  >
                    All Color
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-1"
                  />
                  <label
                    className="custom-control-label"
                    for="color-1"
                  >
                    Black
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-2"
                  />
                  <label
                    className="custom-control-label"
                    for="color-2"
                  >
                    White
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-3"
                  />
                  <label
                    className="custom-control-label"
                    for="color-3"
                  >
                    Red
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-4"
                  />
                  <label
                    className="custom-control-label"
                    for="color-4"
                  >
                    Blue
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label
                    className="custom-control-label"
                    for="color-5"
                  >
                    Green
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>

            <div className="mb-5">
              <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked=""
                    id="size-all"
                  />
                  <label
                    className="custom-control-label"
                    for="size-all"
                  >
                    All Size
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-1"
                  />
                  <label
                    className="custom-control-label"
                    for="size-1"
                  >
                    XS
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-2"
                  />
                  <label
                    className="custom-control-label"
                    for="size-2"
                  >
                    S
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-3"
                  />
                  <label
                    className="custom-control-label"
                    for="size-3"
                  >
                    M
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-4"
                  />
                  <label
                    className="custom-control-label"
                    for="size-4"
                  >
                    L
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-5"
                  />
                  <label
                    className="custom-control-label"
                    for="size-5"
                  >
                    XL
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-10 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Latest
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Popularity
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Best Rating
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ShowProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
