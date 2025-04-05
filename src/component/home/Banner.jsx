import React from 'react'
import bannerImg from '../../assets/images/1.jpg';
const Banner = () => {
    return (
        <div className="intro-banner-wrap d-flex justify-content-center">
            <img src={bannerImg} className="img-fluid rounded" style={{padding: '70px 0 0'}}/>
        </div>
    )
}

export default Banner