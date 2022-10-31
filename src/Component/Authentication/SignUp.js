import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Login.css";
const SignUp = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/inventory");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    //password validation
    if (password !== confirmPassword) {
      setError("Password is note matching 😢");
      return;
    }
    // if (password < 6) {
    //   setError("Password must be 6 character & longer 😎");
    //   return;
    // }

    // create user
    createUserWithEmailAndPassword(email, password);
  }; //handleCreateUser end

  return (
    <div>
      <div className="pt-5 mb-5">
        <h4 className="text-center mb-2">Sign Up</h4>
        <p className="text-center error">{error}</p>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="card card-body Form_box">
                <form onSubmit={handleCreateUser}>
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
                  <div className="form-group required">
                    <label
                      className="d-flex flex-row align-items-center"
                      htmlFor="password"
                    >
                      Confirm Password
                    </label>
                    <input
                      onBlur={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      required
                      name="confirmPassword"
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="form-check">
                    <label
                      className="d-flex flex-row align-items-center"
                    >
                      Gander
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                  <div className="form-group pt-1 text-center mt-3">
                    <button
                      className="btn btn-primary btn-block  px-5 py-2"
                      type="submit"
                    >
                      Sign up
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
                  <p className="small-xl pt-3 text-center">
                    <span className="text-muted">Alread Have a Account?</span>
                    <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
