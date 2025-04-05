import React from "react";

const CartSummary = ({totalPrice, taxTotal, tax}) => {
  // const grandTotal = totalPrice + tax;

  return (
    <div className="card">
      <div className="card-body">
        <dl className="dlist-align">
          <dt>Total price:</dt>
          <dd className="text-right">${`${totalPrice}`}</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Tax:</dt>
          <dd className="text-right">${`${tax}`}</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Total:</dt>
          <dd className="text-right text-dark b">
            <strong>${`${taxTotal}`}</strong>
          </dd>
        </dl>
        <hr />
        <p className="text-center mb-3">
          <img src="./images/misc/payments.png" height="26" alt="Payments" />
        </p>
        <a href="./place-order.html" className="btn btn-primary btn-block w-100 mb-3">
          Checkout
        </a>
        <a href="./store.html" className="btn btn-light btn-block w-100">
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default CartSummary;
