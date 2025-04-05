import React from 'react'
import PlaceHolder from './PlaceHolder';
import { Link } from 'react-router-dom';

const PlaceHolderContainer = () => {
    const placeNumbers = [...Array(12).keys()].slice(0);
  return (
    <section className="section-name padding-y-sm">
    <div className="container">
        <header className="section-heading d-flex justify-content-between">
            <h3 className="section-title">Popular products</h3>
            <Link to="/store" className="btn btn-outline-primary">See all</Link>
        </header>
        <div className="row">
            {placeNumbers.map((num) => <PlaceHolder key={num} />)}
        </div>
    </div>
</section>
  )
}

export default PlaceHolderContainer