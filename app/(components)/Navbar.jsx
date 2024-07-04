import React from "react";
import Link from "next/link";

const Navbar = ({ items }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Supplement Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {items.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link href={`/Category/${item.id}`} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex">
            <a href="#" className="btn btn-outline-primary">
              <i className="bi bi-cart-fill me-2"></i>
              Sepetim
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
