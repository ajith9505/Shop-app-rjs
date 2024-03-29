import React from 'react'

//Component for creating navigation bar in web application
function Navbar(props) {
    return (
        <div>

            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container px-4 px-lg-5">
                    <a className='navbar-brand' href="">Start Bootstrap</a>
                    <button className="navbar-toggler"
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                     >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div id='navbarSupportedContent' className='collapse navbar-collapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
                            <li className='nav-item'>
                                <a className='nav-link active' href="">Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <button className='nav-link dropdown-toggle'
                                    id='navbarDropdown'
                                    data-bs-toggle='dropdown'
                                    type='button'
                                    href="#"
                                    aria-expanded='false'>Shop</button>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <a className='dropdown-item' href="#!">All Products</a>
                                    <a className='dropdown-item' href="#!">Popular Items</a>
                                    <a className='dropdown-item' href="#!">New Arrivals</a>
                                </div>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <button className='btn btn-outline-dark' type='submit'>
                                <i className='bi-cart-fill me-1'></i>Cart
                                <span className='badge bg-dark text-white ms-1 rounded-pill'>{props.cart}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar