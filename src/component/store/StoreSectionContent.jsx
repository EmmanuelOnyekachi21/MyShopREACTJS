import React, { useEffect, useState } from 'react'
import StoreAside from './StoreAside'
import CardContainer from './CardContainer';
import CardContainerPlaceHolderContainer from './CardContainerPlaceHolderContainer';

const StoreSectionContent = ({ products, loading, previous, next, setProductUrl, currentPage, totalPages, productLength }) => {
    // Function to build the pagination URL dynamically
    const buildPageUrl = (pageNum) => {
        const base = previous || next || '/store'; // Start with either previous or next URL or default to /store
        const urlObj = new URL(base, window.location.origin); // Create a new URL object using the base URL
        urlObj.searchParams.set('page', pageNum); // Set the page number in the query string
        return urlObj.pathname + '?' + urlObj.searchParams.toString(); // Return the full URL with page parameter
    };

    // Show loading placeholder if still fetching data
    if (loading) {
        return <CardContainerPlaceHolderContainer />
    } else {
        return (
            <>
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">
                            <div className='col-md-3'>
                                <StoreAside />
                            </div>
                            <main className="col-md-9">

                                <header className="border-bottom mb-4 pb-3">
                                    <div className="form-inline">
                                        <span className="mr-md-auto"><strong>{productLength}</strong> Items found</span>
                                    </div>
                                </header>

                                <div className="row">
                                    {products.map((product) => <CardContainer key={product.id} product={product} category_slug={product.category.slug} />)}
                                </div>

                                {/* Pagination section */}
                                <nav className="mt-4" aria-label="Pagination">
                                    <ul className="pagination">
                                        {/* Previous page button */}
                                        <li className={`page-item ${!previous && 'disabled'}`}>
                                            <button className="page-link" onClick={() => previous && setProductUrl(previous)}>Previous</button>
                                        </li>

                                        {/* Page number buttons */}
                                        {[...Array(totalPages)].map((_, index) => {
                                            const pageNum = index + 1; // The page number for this iteration
                                            return (
                                                <li key={pageNum} className={`page-item ${currentPage === pageNum && 'active'}`}>
                                                    <button
                                                        className="page-link"
                                                        onClick={() => setProductUrl(buildPageUrl(pageNum))} // Update productUrl when a page is clicked
                                                    >
                                                        {pageNum}
                                                    </button>
                                                </li>
                                            );
                                        })}

                                        {/* Next page button */}
                                        <li className={`page-item ${!next && 'disabled'}`}>
                                            <button className="page-link" onClick={() => next && setProductUrl(next)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>

                            </main>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default StoreSectionContent;
