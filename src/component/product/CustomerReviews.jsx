import React from 'react';

const CustomerReviews = () => {
    return (
        <div className="col-md-9">
            <header className="section-heading">
                <h3>Customer Reviews</h3>
            </header>
            {/* {reviews.map((review, index) => ( */}
                <article className="box mb-3">
                    <div className="icontext w-100">
                        <img src='' className="img-xs icon rounded-circle" alt="User" />
                        <div className="text">
                            <span className="date text-muted float-md-right">4th January, 2020</span>
                            <h6 className="mb-1">John Taker</h6>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>I got exactly what i ordered</p>
                    </div>
                </article>
            {/* ))} */}
        </div>
    );
};

export default CustomerReviews;
