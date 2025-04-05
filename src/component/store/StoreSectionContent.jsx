import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StoreAside from './StoreAside'
import api from '../../api';
import CardContainer from './CardContainer';
import CardContainerPlaceHolderContainer from './CardContainerPlaceHolderContainer';
import useCategories from '../../hooks/useCategories';

const StoreSectionContent = ({products, loading}) => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const { category_slug } = useParams();

    // useEffect(function () {
    //     setLoading(true)
    //     let url = '/store'
    //     if (category_slug) {
    //         url = `/store/${category_slug}`
    //     }
    //     api.get(url)
    //         .then((res) => {
    //             console.log(res.data);
    //             setProducts(res.data)
    //             setLoading(false)
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //             setLoading(false);
    //         });
    // }, []);

    {
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
                                            <span className="mr-md-auto"><strong>{products.length}</strong> Items found</span>

                                        </div>
                                    </header>

                                    <div className="row">
                                        {products.map((product) => <CardContainer key={product.id} product={product} category_slug={product.category.slug} />)}

                                    </div>

                                    <nav className="mt-4" aria-label="Page navigation sample">
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
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
}

export default StoreSectionContent