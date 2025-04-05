import React, { useContext } from "react";

const QuantitySelector = ({item, updateQuantityChange}) => {
  return (
    <div className="input-group input-spinner">
      <div className="input-group-prepend">
        <button className="btn btn-light" onClick={() => {updateQuantityChange(item.id, item.quantity - 1)}}>
          <i className="fa fa-minus"></i>
        </button>
      </div>
      <input type="text" className="form-control" value={item.quantity} readOnly />
      <div className="input-group-append">
        <button className="btn btn-light" onClick={() => {updateQuantityChange(item.id, item.quantity + 1)}}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
