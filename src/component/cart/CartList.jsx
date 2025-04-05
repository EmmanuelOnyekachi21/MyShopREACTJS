import React from "react";
import CartItem from "./CartItem";

const CartList = ({items, updateQuantityChange, handleRemove}) => {
  return (
    <table className="table table-borderless table-shopping-cart">
      <thead className="text-muted">
        <tr className="small text-uppercase">
          <th scope="col">Product</th>
          <th scope="col" width="120">Quantity</th>
          <th scope="col" width="120">Price</th>
          <th scope="col" className="text-right" width="200"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => <CartItem key={item.id} item={item} updateQuantityChange={updateQuantityChange} handleRemove={handleRemove} />)}
      </tbody>
    </table>
  );
};

export default CartList;
