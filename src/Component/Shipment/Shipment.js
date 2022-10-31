import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import "./Shipping.css";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const handleShippingFormSubmit=(e)=>{
    e.preventDefault();
    window.alert({
        name:name,
        address:address,
        phone:phone
    })
  }
  return (
    <>
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading pt-5">Shipment Information</h1>
          </div>
        </section>

        <div className="container pb-5">
          <div className="row">
            <div className="col mb-5">
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <i className="fa fa-envelope" /> Contact us.
                </div>
                <div className="card-body">
                  <form onSubmit={handleShippingFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        onBlur={(e) => {
                          setName(e.target.value)
                        }}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        value={user?.email}
                        readOnly
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Your Address</label>
                      <input
                        onBlur={(e) => {
                          setAddress(e.target.value)
                        }}
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="your full Address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Your Phone number</label>
                      <input
                        onBlur={(e) => {
                          setPhone(e.target.value)
                        }}
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="your phone number"
                        required
                      />
                    </div>

                    <div className="mx-auto text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary text-right px-5"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase">
                  <i className="fa fa-home" /> Address
                </div>
                <div className="card-body">
                  <p>3 rue des Champs Elysées</p>
                  <p>75008 PARIS</p>
                  <p>France</p>
                  <p>Email : email@example.com</p>
                  <p>Tel. +33 12 56 11 51 84</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipment;
