import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OrdersCard.css";

const OrdersCard = ({ product, deleteOrderProductHandler }) => {
  const { img, name, price, shipping, quantity } = product;

  return (
    <div>
      <div className="card_OrdersCard">
        <img className="reviewProductImg_OrdersCard" src={img} alt="..." />
        <div className="general_OrdersCard">
          <div>
            <h6 title={name}>
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </h6>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Shipping Charge: ${shipping}</p>
          </div>
          <div
            className="delete-btn"
            onClick={() => deleteOrderProductHandler(product)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
