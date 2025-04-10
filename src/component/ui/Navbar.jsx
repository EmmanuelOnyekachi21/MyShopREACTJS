import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import useCategories from '../../hooks/useCategories';
import { CartContext } from '../../context/CartContext';
import gifImage from '../../assets/gifImage.gif';

const Navbar = () => {
    const categories = useCategories();
    const { numberOfItems } = useContext(CartContext);
    const NavBarRef = useRef();
    const [sticky, setSticky] = useState(false); // Track whether the navbar is sticky
    const [navbarX, setNavbarX] = useState(0);  // Track the original position of the navbar

    const [query, setQuery] = useState(''); // Get user query
    const navigate = useNavigate(); // Helps to navigate to SearchResult.jsx page

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/store/search/${query}`);
        }
    };

    useEffect(() => {
        // Set navbarX value when component mounts (stores the position of the navbar)
        if (NavBarRef.current) {
            setNavbarX(NavBarRef.current.offsetTop); // Get the distance of the navbar from the top of the page
        }

        // Scroll event handler to manage sticky state based on scroll position
        const handleScroll = () => {
            // Check if the current scroll position has reached or passed the navbar position
            if (window.scrollY >= navbarX) {
                setSticky(true); // Make the navbar sticky
            } else {
                setSticky(false); // Reset if the user scrolls up
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component is unmounted
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navbarX]); // Dependency on navbarX ensures the effect runs when it is initially set

    return (
        <div>
            <div style={{ width: '100%' }}>
                <img src={gifImage} alt="" style={{ width: '100%' }} />
            </div>
            <div ref={NavBarRef} 
                className={`${sticky ? 'position-fixed top-0' : ''} header-main border-bottom position-fixed bg-white w-100 ${styles.transformNavbar}`} 
                style={{ zIndex: 100 }}>
                <nav className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-md-3 col-6">
                            <a href='/' className={`brand-wrap ${styles.underline}`}>
                                GodsOwn<span className={styles.logoSpan}>Stores</span>
                            </a>
                        </div>
                        <a href="/store" className="btn btn-outline-primary" style={{ width: "10%" }}>Store</a>
                        <div className="col-lg col-md-6 col-sm-12 col">
                            <form className="search" onSubmit={handleSearch}>
                                <div className="input-group w-100">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search products"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    {/* <div className="input-group-append"> */}
                                        <button className="btn btn-primary" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    {/* </div> */}
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
                            <div className="d-flex mb-3 mb-lg-0 gap-3">
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
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
