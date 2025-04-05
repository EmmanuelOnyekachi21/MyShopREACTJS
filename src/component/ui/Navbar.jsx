import React, { useContext, useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import api from '../../api'
import useCategories from '../../hooks/useCategories'
import { CartContext } from '../../context/CartContext'


const Navbar = () => {
    const categories = useCategories();
    const {numberOfItems} = useContext(CartContext)

    return (
        <header className="section-header position-relative">

            <nav className="header-main border-bottom position-fixed bg-white w-100" style={{zIndex: 100}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to='/' className={`brand-wrap ${styles.underline}`}>
                                GodsOwn<span className={styles.logoSpan}>Stores</span>
                            </Link>
                        </div>
                        {/* <div className="col-lg col-sm col-md col-6 flex-grow-0">
                            <div className="category-wrap dropdown d-inline-block float-right">
                                <button
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    // data-toggle="dropdown"
                                    data-bs-toggle="dropdown" 
                                >
                                    <i className="fa fa-bars"></i> All category
                                </button>
                                <div className="dropdown-menu">
                                    {categories.map((category) => <a key={category.id} className={`${styles.linkHover} dropdown-item`} href='#'>{category.category_name}</a>)}
                                </div>
                            </div>
                        </div> */}
                        <a href="/store" className="btn btn-outline-primary" style={{width: "10%"}}>Store</a>
                        <div className="col-lg  col-md-6 col-sm-12 col">
                            <form action="#" className="search">
                                <div className="input-group w-100">
                                    <input
                                        type="text"
                                        className="form-control"
                                        // style={{width: "60%"}}
                                        placeholder="Search"
                                    />

                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
                            <div className="d-flex  mb-3 mb-lg-0 gap-3">
                                <div className="widget-header">
                                    <small className="title text-muted">Welcome guest!</small>
                                    <div>
                                        <a href="./signin.html" className={styles.underlineSM}>Sign in</a>
                                        <span className="dark-transp"> | </span>
                                        <a href="./register.html" className={styles.underlineSM}> Register</a>
                                    </div>
                                </div>
                                <Link to="/cart" className="widget-header pl-3 ml-3">
                                    <div className="icon icon-sm rounded-circle border">
                                        <i className="fa fa-shopping-cart"></i>
                                    </div>
                                    <span className="badge badge-pill badge-danger notify">
                                        {numberOfItems === 0 ? '' : numberOfItems}
                                        {/* {console.log(numberOfItems)} */}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar