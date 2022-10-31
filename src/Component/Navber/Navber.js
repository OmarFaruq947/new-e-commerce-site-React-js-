import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import logo from "../../images/Logo.svg";
import "./Navber.css";
const Navber = () => {
  const [user] = useAuthState(auth);


  //handleSignOut
  const handleSignOut=()=>{
    signOut(auth);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/shop">
            <img src={logo} alt="Bootstrap" width="200" height="50" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link link_items"
                  aria-current="page"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_items" to="/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_items" to="/inventory">
                  Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_items" to="/about">
                  About
                </Link>
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <div className="nav-item dropdown">
            <Link
              //dropdown-toggle  class use korle akti tir symble ase
              className="nav-link link_items"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="user_logo"
                src={`${user}` ? 'https://www.svgrepo.com/show/192247/man-user.svg' : 'https://www.svgrepo.com/show/429170/diet-food-fruit.svg'}
                alt=""
              />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <li className="nav-item">
                    {user ? (
                      <Link to="#" onClick={handleSignOut}>sign out</Link>
                    ) : (
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    )}
                  </li>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
