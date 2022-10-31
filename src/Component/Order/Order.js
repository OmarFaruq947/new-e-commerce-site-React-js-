import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import { removeFromDb } from "../utilities/fakedb";
import OrdersCard from "./OrdersCard";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteOrderProductHandler = (product) => {
    const deletedProduct = cart.filter((pd) => pd.id !== product.id);
    setCart(deletedProduct);
    removeFromDb(product.id);
  };

  return (
    <div>
      <h1>{products.length}</h1>
      <p>cart has: {cart.length}</p>

      <div className="container">
        <div className="row">
          <div className="row col-sm-12 col-md-9 col-lg-9">
            <div className="row row-cols-sm-1 row-cols-md-1  row-cols-lg-12 g-3">
              {cart.map((product) => (
                <OrdersCard
                  key={product.id}
                  product={product}
                  deleteOrderProductHandler={deleteOrderProductHandler}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 shopSideber">
            <br />
            <br />
            <Cart cart={cart}>
              <Link to="/shipment">
                <button type="button" className="btn add-to-cart-btn">
                  Shopping <FontAwesomeIcon icon={faShoppingBag} />
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
