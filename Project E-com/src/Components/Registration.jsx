import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const phone = useRef();

  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        phone: phone.current.value,
      }),
    });
    name.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    password.current.value = "";
    confirmPassword.current.value = "";
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, [addUser]);

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "200px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            User Registration
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-10 mx-auto mb-5 card">
            <div className="contact-form">
              <div id="success"></div>
              <form
                action=""
                onSubmit={addUser}
              >
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    ref={name}
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    ref={email}
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    ref={password}
                    placeholder="Your password"
                    required="required"
                    data-validation-required-message="Please enter your password"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="password"
                    className="form-control"
                    id="c-password"
                    ref={confirmPassword}
                    placeholder="Your Confirm password"
                    required="required"
                    data-validation-required-message="Please enter Confirm password"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    ref={phone}
                    placeholder="Your phone"
                    required="required"
                    data-validation-required-message="Please enter your phone number"
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
