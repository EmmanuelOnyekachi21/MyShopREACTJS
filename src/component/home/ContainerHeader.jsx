import React from 'react'
import { Link } from 'react-router-dom'
import ContainerCards from './ContainerCards'

const ContainerHeader = ({ products }) => {
    return (
        <section className="section-name padding-y-sm">
            <div className="container">
                <header className="section-heading d-flex justify-content-between">
                    <h3 className="section-title">Popular products</h3>
                    <a href="/store" className="btn btn-outline-primary">See all</a>
                </header>
                <div className="row">
                    {products.map((product) => <ContainerCards key={product.id} product={product} category_slug={product.category.slug}/>)}
                </div>
            </div>
        </section>
    )
}

export default ContainerHeader