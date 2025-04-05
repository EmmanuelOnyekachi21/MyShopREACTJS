import React from 'react'
import useCategories from '../../hooks/useCategories'
import { Link, NavLink } from 'react-router-dom';

const StoreAside = () => {
    const categories = useCategories();
    return (
        <div className="card">
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title"><b>Categories</b></h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">

                        <ul className="list-menu">
                            <li>
                                <NavLink to='/store' end className={({isActive}) => isActive ? "link-active" : ""}>
                                    All products
                                </NavLink>
                            </li>
                            {categories.map(
                                (category) => <li key={category.id}>
                                    <NavLink to={`/store/${category.slug}`} className={({isActive}) => isActive ? "link-active" : ""}>
                                        {category.category_name} 
                                    </NavLink>
                                </li>
                            )}

                        </ul>

                    </div>
                </div>
            </article>
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title"><b>Sizes</b> </h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_4">
                    <div className="card-body">
                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> XS </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> SM </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> LG </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> XXL </span>
                        </label>
                    </div>
                </div>
            </article>

            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title"><b>Price range</b></h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_3">
                    <div className="card-body">

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Min</label>
                                <select className="mr-2 form-control">
                                    <option value="0">$0</option>
                                    <option value="50">$50</option>
                                    <option value="100">$100</option>
                                    <option value="150">$150</option>
                                    <option value="200">$200</option>
                                    <option value="500">$500</option>
                                    <option value="1000">$1000</option>
                                </select>
                            </div>
                            <div className="form-group text-right col-md-6">
                                <label>Max</label>
                                <select className="mr-2 form-control">
                                    <option value="50">$50</option>
                                    <option value="100">$100</option>
                                    <option value="150">$150</option>
                                    <option value="200">$200</option>
                                    <option value="500">$500</option>
                                    <option value="1000">$1000</option>
                                    <option value="2000">$2000+</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-block btn-primary mt-1 w-100">Apply</button>
                    </div>
                </div>
            </article>

        </div>
    )
}

export default StoreAside