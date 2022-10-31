import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, stock, ratings, ratingsCount, quantity } = product;


  // const navigate = useNavigate();
  // const handleProductDetails =(product)=>{
  //   const path = `ProductDetails/${product.id}`;
  //   navigate(path);
  // }


  return (
    <>
      <div className="col">
        <div className="card">
          <Link to={`/ProductDetails/${product.id}`}><img src={img} className="card-img-top" alt="..." productD={product}/></Link>
          <div className="card-body">
            <h6 className="card-title" title={name}>{name.length > 21 ? name.slice(0,21)+'...' : name}</h6>
            <p className="card-text"></p>
            <span className="badge rounded-pill text-bg-primary">
              Price: {price}
            </span>
            <span className="badge rounded-pill text-bg-info">
              Available: {stock}
            </span>
            <br />
            <span className="badge rounded-pill text-bg-success">
              {ratings}
            </span>

            <span className="badge rounded-pill text-bg-danger">
              {ratingsCount}
            </span>
            <span className="badge rounded-pill text-bg-light">{quantity}</span>
          </div>

          <button  type="button" className="btn add-to-cart-btn" onClick={() => handleAddToCart(product)}>
            Add to Cart
            <FontAwesomeIcon
              icon={faShoppingCart}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
