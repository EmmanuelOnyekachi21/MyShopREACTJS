import React, { useEffect, useState } from 'react'
import StoreSectionContent from './StoreSectionContent'
import { useParams } from 'react-router-dom';
import api from '../../api';
import useCategories from '../../hooks/useCategories';

const StoreSection = () => {
    const [products, setProducts] = useState([]); // Holds the products to display
    const [loading, setLoading] = useState(false); // Manages the loading state
    const { category_slug } = useParams(); // Extracts category_slug from the URL
    const categories = useCategories(); // Custom hook that fetches all categories
    const [catName, setCatName] = useState(""); // Holds the name of the category based on category_slug
    const [prevLink, setprevLink] = useState(""); // Holds the URL for the previous page of products
    const [nextLink, setnextLink] = useState(""); // Holds the URL for the next page of products
    const [productUrl, setProductUrl] = useState('/store'); // The URL to fetch products (with category_slug if provided)
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page number
    const [totalPages, setTotalPages] = useState(1); // Stores the total number of pages (calculated from the count)

    useEffect(function () {
        setLoading(true); // Start loading when fetching data
        let url = productUrl;
        if (category_slug) {
            url = `/store/${category_slug}` // If category_slug is provided, filter products by category
        }

        // Fetching the products and pagination data
        api.get(url)
            .then((res) => {
                setProducts(res.data.results); // Set the products to display
                setprevLink(res.data.previous); // Set the URL for the previous page (if exists)
                setnextLink(res.data.next); // Set the URL for the next page (if exists)
                setTotalPages(Math.ceil(res.data.count / 6)); // Calculate total pages based on total products (assumes 6 per page)

                // Extract current page from the URL (pagination query string)
                const pageParam = new URLSearchParams(new URL(res.config.url, window.location.origin).search).get('page')
                setCurrentPage(pageParam ? parseInt(pageParam) : 1); // Set the current page number, defaulting to 1 if not found

                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(err => {
                console.log(err.message); // Log any error that happens during the fetch
                setLoading(false); // Set loading to false if there’s an error
            });

        // Determine category name for display based on category_slug
        for (let category of categories) {
            if (category.slug === category_slug) {
                setCatName(category.category_name); // Set the category name
            }
        }
    }, [category_slug, productUrl]); // Re-fetch data if category_slug or productUrl changes

    return (
        <div>
            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">{category_slug ? `Category: ${catName}` : "All Products"}</h2>
                </div>
            </section>

            {/* Pass pagination data to the content component */}
            <StoreSectionContent
                products={products}
                loading={loading}
                previous={prevLink} // URL for previous page
                next={nextLink} // URL for next page
                setProductUrl={setProductUrl} // Function to change productUrl for pagination
                currentPage={currentPage} // The current page
                totalPages={totalPages} // Total number of pages
            />
        </div>
    )
}

export default StoreSection;
