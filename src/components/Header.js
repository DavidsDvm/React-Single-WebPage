import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg';

    return (
        <>
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src={logo} alt="" width="100" height="50" class="d-inline-block align-text-top" />
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
                <li><Link to="/characters" className="nav-link px-2 text-white">Characters</Link></li>
                <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
            </div>
            </div>
        </header>
        </>
    )
}

Header.defaultProps = {
  tittle: 'cara de qk'
}

export default Header;