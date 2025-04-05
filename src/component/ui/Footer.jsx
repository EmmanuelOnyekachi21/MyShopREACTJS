import React from 'react'
import styles from './Navbar.module.css'

const Footer = () => {
    return (
        <footer className="section-footer border-top bg-light">
            <div className="container">
                <section className="footer-bottom border-top">
                    {/* <div class="col-md-2">
                        <p class="text-muted"> &copy 2025 GodsOwnStores </p>
                    </div>
                    <div class="col-md-8 text-md-center">
                        <span class="px-2">info@pixsellz.io</span>
                        <span class="px-2">+879-332-9375</span>
                        <span class="px-2">Street name 123, Avanue abc</span>
                    </div> */}
                    Developed with <i className="fa-solid fa-heart text-danger"></i> by D3MXN
                    <br />nnabugwuemmanuel675@gmail.com <i className="fa-solid fa-location-dot"></i>Umuahia, Nigeria
                    <br />Tutorial by <a href="https://www.linkedin.com/in/rathan-kumar492" className={styles.underlineSM}>Rathan Kumar</a>
                </section>
            </div>
        </footer>
    )
}

export default Footer