import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import useProducts from "../Hooks/useProducts";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProducts) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProducts.id);

    if (!exists) {
      selectedProducts.quantity = 1;
      newCart = [...cart, selectedProducts];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProducts.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProducts.id);
  };

  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
      setCart(saveCart);
    }
  }, [products]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-3 order-5  shopSideber">

            <Cart cart={cart}>
              <Link to="/orders">
                <button type="button" className="btn add-to-cart-btn">
                  Review Order <FontAwesomeIcon icon={faShoppingBag} />
                </button>
              </Link>
            </Cart>

          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
