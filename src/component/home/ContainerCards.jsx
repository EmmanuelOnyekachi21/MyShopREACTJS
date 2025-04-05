import React from 'react'
import { Base_url } from '../../api'

const ContainerCards = ({ product, category_slug }) => {

    return (

        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card card-product-grid">
                <a href={`/store/${category_slug}/${product.slug}`} className="img-wrap"> <img src={`${Base_url}${product.image}`} /> </a>
                <figcaption className="info-wrap">
                    <a href={`/store/${category_slug}/${product.slug}`} className="title">{product.product_name}</a>
                    <div className="price mt-1">{`$${product.price}`}</div>
                </figcaption>
            </div>
        </div>

    )
}

export default ContainerCards