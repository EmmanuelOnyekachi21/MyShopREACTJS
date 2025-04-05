import React from 'react'
import CardContainerPlaceHolder from './CardContainerPlaceHolder'
import StoreAside from './StoreAside'

const CardContainerPlaceHolderContainer = () => {
    const placeNumbers = [...Array(12).keys()].slice()
  return (
    <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <div className='col-md-3'>
                            <StoreAside />
                        </div>
                        <main className="col-md-9">

                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">Loading products...</span>

                                </div>
                            </header>

                            <div className="row">
                                {placeNumbers.map((num) => <CardContainerPlaceHolder key={num} />)}
                                
                            </div>
                        </main>
                    </div>
                </div>
            </section>
  )
}

export default CardContainerPlaceHolderContainer