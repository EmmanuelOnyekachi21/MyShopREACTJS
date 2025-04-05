import React, { useEffect, useState } from 'react'
import api, { Base_url } from '../../api'
import uuidValue from '../../GenerateCartCode'
import useCartStatus from '../../hooks/useCartStatus'
const CardContainer = ({ product, category_slug }) => {
 const { productAdded, add_to_cart } = useCartStatus(product);


return (

    <div className="col-md-4">
        <figure className="card card-product-grid">
            <div className="img-wrap">
                <a href={`/store/${category_slug}/${product.slug}`} className="title">
                    <img src={`${Base_url}${product.image}`} />
                </a>


            </div>
            <figcaption className="info-wrap">
                <div className="fix-height">
                    <a href={`/store/${category_slug}/${product.slug}`} className="title">{product.product_name}</a>
                    <div className="price-wrap mt-2">
                        <span className="price">{`$${product.price}`}</span>
                        {/* <del className="price-old">$1980</del> */}
                    </div>
                </div>
                <button onClick={add_to_cart} disabled={productAdded} className="btn btn-block btn-primary w-100">
                    {productAdded ? "Added to cart successfully" : "Add to cart"}
                </button>
            </figcaption>
        </figure>
    </div>
)
}

export default CardContainer