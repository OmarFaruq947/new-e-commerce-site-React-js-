import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Login.css";

const Login = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, {replace: true});
  }

  const handleUserSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(user);
  };

  return (
    <>
      <div className="pt-5 mb-5">
        <h4 className="text-center mb-2">Log In</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="card card-body Form_box">
                <form onSubmit={handleUserSignin}>
                  <div className="form-group required">
                    <lsabel htmlFor="username">Email</lsabel>
                    <input
                      onBlur={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="form-control text-lowercase"
                      required
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group required">
                    <label
                      className="d-flex flex-row align-items-center"
                      htmlFor="password"
                    >
                      Password
                      <a
                        className="ml-auto border-link small-xl"
                        href="/forget-password"
                      >
                        Forget?
                      </a>
                    </label>
                    <input
                      onBlur={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      required
                      name="password"
                      placeholder="password"
                    />
                  </div>
                  <p className="text-center error">{error}</p>
                  <div className="form-group pt-1 text-center">
                    <button
                      className=" btn btn-primary btn-block px-5 py-2"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <p className="text-center mb-0 mt-4">--- Or ---</p>

                {/* button */}
                <div>
                  <button
                    type="button"
                    className=" form-control text-lowercase mt-3"
                  >
                    <img
                      className="btn-logo"
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      alt=""
                    />
                    <span> Login with Google</span>
                  </button>

                  <button
                    type="button"
                    className=" form-control text-lowercase mt-3"
                  >
                    <img
                      className="btn-logo"
                      src="https://www.svgrepo.com/show/343553/facebook-network-communication-internet-interaction.svg"
                      alt=""
                    />
                    <span> Login with Facebook</span>
                  </button>
                </div>
                <p className="small-xl pt-3 text-center">
                  <span className="text-muted">New to Ema-john?</span>
                  <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
