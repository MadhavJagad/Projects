import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a
                className="text-dark"
                href=""
              >
                FAQs
              </a>
              <span className="text-muted px-2">|</span>
              <a
                className="text-dark"
                href=""
              >
                Help
              </a>
              <span className="text-muted px-2">|</span>
              <a
                className="text-dark"
                href=""
              >
                Support
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a
                className="text-dark px-2"
                href=""
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                className="text-dark px-2"
                href=""
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="text-dark px-2"
                href=""
              >
                <i className="fa fa-linkedin-in"></i>
              </a>
              <a
                className="text-dark px-2"
                href=""
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="text-dark pl-2"
                href=""
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              href=""
              className="text-decoration-none"
            >
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a
              href=""
              className="btn border"
            >
              <i className="fa fa-heart text-primary"></i>
              <span className="badge">0</span>
            </a>
            <Link
              to="/cart"
              className="btn border"
            >
              <i className="fa fa-shopping-cart text-primary"></i>
              <span className="badge">0</span>
            </Link>
          </div>
        </div>
        <div
          className="d-flex align-content-center justify-content-between mb-2"
          id="navbarCollapse"
        >
          <div className="d-flex  mr-auto py-0">
            <Link
              to={"/"}
              className="nav-item nav-link active"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="nav-item nav-link"
            >
              Shop
            </Link>
            <Link
              to={"/contact"}
              className="nav-item nav-link"
            >
              Contact
            </Link>
          </div>
          <div className="d-flex ml-auto py-0">
            <Link
              to="/login"
              className="nav-item nav-link"
            >
              Login
            </Link>
            <Link
              to="/reg"
              className="nav-item nav-link"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
