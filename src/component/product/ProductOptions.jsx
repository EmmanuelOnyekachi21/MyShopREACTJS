import React from 'react';

const ProductOptions = ({ colors, sizes }) => {
    return (
        <>
            <hr />
            {
                colors.length > 0 && (
                    <div className="row">
                        <div className="item-option-select">
                            <h6>Choose Color</h6>
                            <div className="btn-group btn-group-sm btn-group-toggle">
                                {colors.map((color, index) => (
                                    <label key={index} className="btn btn-light">
                                        <input type="radio" name="radio_color" /> {color}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }


            {
                sizes.length > 0 && (
                    <div className="row">
                        <div className="item-option-select">
                            <h6>Select Size</h6>
                            <div className="btn-group btn-group-sm btn-group-toggle">
                                {sizes.map((size, index) => (
                                    <label key={index} className="btn btn-light">
                                        <input type="radio" name="radio_size" /> {size}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
            <hr />
        </>
    );
};

export default ProductOptions;
