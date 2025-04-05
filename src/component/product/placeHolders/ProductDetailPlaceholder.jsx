import React from 'react'
import ProductGalleryPlaceHolder from './ProductGalleryPlaceHolder'
import ProductDetails from './ProductDetails'
import StockStatus from './StockStatus'
// import AddToCartButton from './AddToCartButton'
const ProductDetailPlaceholder = () => {
  return (
    <section className="section-content padding-y bg">
            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <ProductGalleryPlaceHolder />
                        <main className="col-md-6 border-left">
                            <ProductDetails 
                            />
                            <StockStatus /> 
                      
                            {/* <AddToCartButton /> */}
                        </main>
                    </div>
                    <br />

                    {/* <div className='row'>
                        <RelatedProducts products={similarProducts} />
                    </div> */}
                    <div className="row">
                        {/* <CustomerReviews /> */}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProductDetailPlaceholder