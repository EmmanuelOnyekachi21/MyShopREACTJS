import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <header className="pb-5 my-5 text-bg-light" style={{ paddingTop: '10px' }}>
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bold text-dark">Page Not Found!</h1>
                <p className="lead fw-normal text-dark mb-4">
                    The page you tried accessing does not exists.
                </p>
                <Link to='/' className='btn btn-light btn-lg bg-primary rounded-pill px-4 py-2'>Back Home</Link>
            </div>
        </div>
    </header>
  )
}

export default NotFoundPage