import React from 'react';
import { Base_url } from '../../api';

const ProductGallery = ({ image }) => {
    return (
        <aside className="col-md-6">
            <article className="gallery-wrap">
                <div className="img-big-wrap">
                    <a href="#"><img src={`${Base_url}${image}`} alt="Product" /></a>
                </div>
            </article>
        </aside>
    );
};

export default ProductGallery;
