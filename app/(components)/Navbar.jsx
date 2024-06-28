import React from 'react';
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import {
  FaFlask,
  FaDumbbell,
  FaPrescriptionBottleAlt,
  FaBolt,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Supplement Shop
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  <FiHome /> Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaFlask /> Protein Tozu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaDumbbell /> Kilo & Hacim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaPrescriptionBottleAlt /> Amino Asit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
