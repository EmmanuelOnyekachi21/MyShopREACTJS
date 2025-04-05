import React from 'react'
import CardContainer from '../store/CardContainer'
import ContainerCards from '../home/ContainerCards'

const RelatedProducts = ({ products }) => {
    return (
        <section className="section-name padding-y-sm mt-5">
            <div className="container">
                <header className="section-heading d-flex justify-content-between">
                    <h3 className="section-title">Related products</h3>
                </header>
                <div className="row">
                    {products.map((product) => <ContainerCards key={product.id} product={product} category_slug={product.category.slug} />)}
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts