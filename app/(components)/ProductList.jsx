import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductList = ({ items }) => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {items.map((item) => (
            <div className="col">
              <div className="card h-100" key={item.id}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price} TL</p>
                  <button className="btn btn-primary">
                    <FiShoppingCart /> Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
