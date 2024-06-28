import React from 'react';

const ProductList = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Ürün 1"
              />
              <div className="card-body">
                <h5 className="card-title">Whey Refuel Kombinasyonu 1</h5>
                <p className="card-text">1.422,00 TL</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Ürün 2"
              />
              <div className="card-body">
                <h5 className="card-title">Refuel Kombinasyonu 4</h5>
                <p className="card-text">1.269,00 TL</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Ürün 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  SSN Quadro Performans Kombinasyonu
                </h5>
                <p className="card-text">1.639,00 TL</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Ürün 4"
              />
              <div className="card-body">
                <h5 className="card-title">Performans Kombinasyonu 2</h5>
                <p className="card-text">669,00 TL</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Ürün 5"
              />
              <div className="card-body">
                <h5 className="card-title">
                  SSN Sports Style Nutrition Hacim Kiti
                </h5>
                <p className="card-text">1.999,00 TL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
