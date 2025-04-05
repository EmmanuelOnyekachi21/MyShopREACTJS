import React, { useContext } from "react";
import QuantitySelector from "./QuantitySelector";
import api, { Base_url } from "../../api";


const CartItem = ({ item, updateQuantityChange, handleRemove }) => {
  // const cart_code = localStorage.getItem('cart_code');
  // const product_id = item.product.id;
  // const product_local = localStorage.getItem

  
  return (
    <tr>
      <td>
        <figure className="itemside align-items-center">
          <div className="aside">
            <img src={`${Base_url}${item.product.image}`} className="img-sm" alt='product_image' />
          </div>
          <figcaption className="info">
            <a href={``} className="title text-dark">
              {item.product.product_name}
            </a>

          </figcaption>
        </figure>
      </td>
      <td>
        <QuantitySelector item={item} updateQuantityChange={updateQuantityChange} />
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">{`$${item.item_price}`}</var>
          <small className="text-muted">{`$${item.product.price} each`} </small>
        </div>
      </td>
      <td className="text-right">
        <button className="btn btn-danger" onClick={() => handleRemove(item.product.id, item.quantity)}>Remove</button>
      </td>
    </tr>
  );
};

export default CartItem;
