import React, { useContext } from 'react';
import useCartStatus from '../../hooks/useCartStatus';
import { CartContext } from '../../context/CartContext';

const AddToCartButton = ({product}) => {
    // Using useCartStatus to get add_to_cart and productAdded
    // const {setNumberOfItems} = useContext(CartContext);
    const { productAdded, add_to_cart } = useCartStatus(product)
    console.log(productAdded)
    console.log(add_to_cart)
    return (
        <button onClick={add_to_cart} disabled={productAdded} className="btn btn-primary">
            {
                productAdded
                ? "Product Added Successfully"
                : (
                    <>
                        <span className="text">Add to cart</span> 
                        <i className="fas fa-shopping-cart"></i>
                    </>
                )
            }
        </button>
    );
};

export default AddToCartButton;
