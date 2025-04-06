import React, { useEffect, useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import ProductOptions from './ProductOptions';
import AddToCartButton from './AddToCartButton';
import CustomerReviews from './CustomerReviews';
import StockStatus from './StockStatus';
import { useParams } from 'react-router-dom';
import api from '../../api';
import RelatedProducts from './RelatedProducts';
import ProductDetailPlaceholder from './placeHolders/ProductDetailPlaceholder';
import useCartStatus from '../../hooks/useCartStatus';

const ProductPage = ({}) => {
    const { category_slug } = useParams();
    const { product_slug } = useParams();
    const [product, setProduct] = useState({})
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(function () {
        setLoading(true)
        api.get(`/store/${category_slug}/${product_slug}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
                setColors(res.data.available_colors)
                setSizes(res.data.available_sizes)
                setSimilarProducts(res.data.similar_products)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
                setLoading(false)
            })
    }, [category_slug, product_slug])

    if (loading) {
        return <ProductDetailPlaceholder />
    } else {
        return (
            <section className="section-content padding-y bg">
                <div className="container" style={{padding: '50px'}}>
                    <div className="card">
                        <div className="row no-gutters">
                            <ProductGallery image={product.image} />
                            <main className="col-md-6 border-left">
                                <ProductDetails
                                    title={product.product_name}
                                    price={product.price}
                                    description={product.description}
                                />
                                <StockStatus stock={product.stock} />
                                <ProductOptions
                                    colors={colors}
                                    sizes={sizes}
                                />
                                <AddToCartButton product={product} />
                            </main>
                        </div>
                        <br />

                        <div className='row'>
                            <RelatedProducts products={similarProducts} />
                        </div>
                        <div className="row">
                            <CustomerReviews />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default ProductPage;
