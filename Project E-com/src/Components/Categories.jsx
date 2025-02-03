import React from "react";
import c1 from "../assets/img/cat-1.jpg";
import c2 from "../assets/img/cat-2.jpg";
import c3 from "../assets/img/cat-3.jpg";
import c4 from "../assets/img/cat-4.jpg";
import c5 from "../assets/img/cat-5.jpg";
import c6 from "../assets/img/cat-6.jpg";

const Categories = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href=""
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  className="img-fluid"
                  src={c1}
                  alt=""
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href=""
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  className="img-fluid"
                  src={c2}
                  alt=""
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href=""
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  className="img-fluid"
                  src={c3}
                  alt=""
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href=""
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  className="img-fluid"
                  src={c4}
                  alt=""
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href=""
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  className="img-fluid"
                  src={c5}
                  alt=""
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 Products</p>
              <a
                href=""
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  className="img-fluid"
                  src={c6}
                  alt=""
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
