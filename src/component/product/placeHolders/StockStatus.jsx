import React from 'react';

const StockStatus = () => {
    return (
        <div className="stock-status ms-4">
            <button 
                className={'btn btn-secondary placeholder-glow'} 
                disabled
            >
                <span>Loading...</span>
            </button>
        </div>
    );
};

export default StockStatus;
