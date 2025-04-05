import React from 'react';

const StockStatus = ({ stock }) => {
    return (
        <div className="stock-status">
            <button 
                className={`btn ${stock > 0 ? "btn-success" : "btn-danger"}`} 
                disabled
            >
                {stock > 0 ? `In Stock (${stock} available)` : "Out of Stock"}
            </button>
        </div>
    );
};

export default StockStatus;
