import React, { useState, useEffect } from 'react';
import api from '../../api';
import CardContainer from '../store/CardContainer';
import StoreSectionContent from '../store/StoreSectionContent';
import { useParams } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';

const SearchResults = ({ }) => {
    const query = useParams(); // Get the search query from the URL
    const [products, setProducts] = useState([]); // Holds the products to display
    const [loading, setLoading] = useState(false); // Manages the loading state
    const [prevLink, setprevLink] = useState(""); // Holds the URL for the previous page of products
    const [nextLink, setnextLink] = useState(""); // Holds the URL for the next page of products
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page number
    const [totalPages, setTotalPages] = useState(1); // Stores the total number of pages (calculated from the count)
    const [productLength, setProductLength] = useState(0); // Stores number of product(s) fetched.
    const keyword = query.query;

    useEffect(function () {
        setLoading(true);
        api.get(`/store/search?query=${keyword}`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data.results)
                setprevLink(res.data.previous); // Set the URL for the previous page (if exists)
                setnextLink(res.data.next);
                const pageParam = new URLSearchParams(new URL(res.config.url, window.location.origin).search).get('page')
                setCurrentPage(pageParam ? parseInt(pageParam) : 1); // Set the current page number, defaulting to 1 if not found
                setTotalPages(Math.ceil(res.data.count / 6)); // Calculate total pages based on total products (assumes 6 per page)
                setProductLength(res.data.count);
                setLoading(false);

            })
            .catch(err => console.log(err.message))
    }, [keyword])


    return (
        <div>
            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Search Results for: {keyword}</h2>
                </div>
            </section>

            <StoreSectionContent
                products={products}
                loading={loading}
                previous={prevLink} // URL for previous page
                next={nextLink} // URL for next page
                currentPage={currentPage} // The current page
                totalPages={totalPages} // Total number of pages
                productLength={productLength}


            />
        </div>
    );
};

export default SearchResults;
