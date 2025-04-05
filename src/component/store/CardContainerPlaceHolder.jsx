import React from 'react'
import { Base_url } from '../../api'

const CardContainerPlaceHolder = () => {
    return (
        <div className="col-md-4">
            <figure className="card card-product-grid">
                <div
                    className="place-img"
                    style={{ height: '180px', backgroundColor: 'lightgray' }}
                ></div>
                <div className="card-body">
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-12 placeholder-xs"></span>
                        <span className="placeholder col-12 placeholder-xs"></span>
                    </p>
                </div>
            </figure>
        </div>
    )
}

export default CardContainerPlaceHolder