import React from 'react';
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import {
  FaFlask,
  FaDumbbell,
  FaPrescriptionBottleAlt,
  FaBolt,
} from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
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
              <li className="nav-item">
                <a className="nav-link" href="/Category/1">
                  <FaFlask /> Protein Tozu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Category/2">
                  <FaDumbbell /> Kilo & Hacim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Category/3">
                  <FaPrescriptionBottleAlt /> Amino Asit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Category/4">
                  <FaBolt /> Kreatin
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <a href="#" className="btn btn-outline-primary">
              <FiShoppingCart /> Sepetim
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
