import React from "react";

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
                  <div className="d-flex justify-content-between">
                    <p className="discount-badge">Ücretsiz Kargo</p>
                  </div>
                  <h5 className="card-title product-title">{item.name}</h5>
                  <p className="card-text product-price">{item.price} TL</p>
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
