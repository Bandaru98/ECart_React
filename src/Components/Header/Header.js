
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    {/* Smoothpageup variable */ }
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '100px' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='ms-4'>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products" className="nav-link">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <ul className='navbar-nav ms-auto me-4 mb-2'>
                            <li className='nav-item'>
                                <Link className='nav-link active'>
                                    <button className='btn btn-secondary border-none'>Login</button>
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link className='nav-link active'>

                                    <button className='btn btn-secondary border-none ms-1'>Register</button>
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link className='nav-link active' to='/cart'>
                                    <button className='btn btn-secondary border-none ms-1'>Cart</button>
                                </Link>
                            </li>

                        </ul>
                        {/* <button className='btn btn-secondary border-none'>Login</button>
                        <button className='btn btn-secondary border-none ms-1'>Register</button>
                        <button className='btn btn-secondary border-none ms-1'>Cart</button> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
