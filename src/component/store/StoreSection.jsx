import React, { useEffect, useState } from 'react'
import StoreSectionContent from './StoreSectionContent'
import { useParams } from 'react-router-dom';
import api from '../../api';
import useCategories from '../../hooks/useCategories';

const StoreSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category_slug } = useParams();
    const categories = useCategories();
    const [catName, setCatName] = useState("")
    // console.log(category_slug);
    useEffect(function () {
        setLoading(true)
        let url = '/store'
        if (category_slug) {
            url = `/store/${category_slug}`
        }
        api.get(url)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
            });
        for (let category of categories) {
            if (category.slug === category_slug) {
                setCatName(category.category_name)
            }
        }
    }, [category_slug]);

    return (
        <div>
            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">{category_slug ? `Category: ${catName}` : "All Products"}</h2>
                </div>
            </section>

            <StoreSectionContent products={products} loading={loading} />
        </div>
    )
}

export default StoreSection