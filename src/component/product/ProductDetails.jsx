import React from 'react';

const ProductDetails = ({ title, price, description }) => {
    return (
        <article className="content-body">
            <h2 className="title">{title}</h2>
            <div className="mb-3">
                <var className="price h4">{`$${price}`}</var>
            </div>
            <p>{description}</p>
        </article>
    );
};

export default ProductDetails;
