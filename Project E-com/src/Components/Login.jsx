import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // fetch("http://localhost:3000/users")
    //   .then((response) => response.json())
    //   .then((users) => {
    //     const user = users.find(
    //       (u) =>
    //         u.email === email.current.value &&
    //         u.password === password.current.value
    //     );

    //     if (user) {
    //       setError("Login successful!");
    //       navigate("/");
    //     } else {
    //       setError("Invalid email or password. Please try again.");
    //     }
    //   });

    //  if (result.length > 0) {
    //    alert("Login successful " + result.username);
    //    navigate("/");
    //  } else {
    //    alert("Invalid email or password. Please try again.");
    //  }

    //Another Method
    const EnterEmail = email.current.value;
    const EnterPassword = password.current.value;

    fetch(
      `http://localhost:3000/users?email=${EnterEmail}&password=${EnterPassword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.length == 0) {
          alert("Invalid email or password. Please try again.");
        } else {
          alert("Login successfully Welcome : " + result[0].name);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    email.current.value = "";
    password.current.value = "";
  };

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "200px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            User Login
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">
              <Link to="/reg">Registration</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-10 mx-auto mb-5 card">
            <div className="contact-form">
              <div id="success"></div>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    ref={email}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your password"
                    required="required"
                    ref={password}
                  />
                </div>

                {/* {error && <p className="text-danger">{error}</p>} */}

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Sign In
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

export default Login;
