import Footer from '@/app/(components)/Footer';
import Navbar from '@/app/(components)/Navbar';
import React from 'react';

const ProductDetailPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/800x400"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <h1>ÜRÜN ADI</h1>
            <p className="lead">Ürün açıklaması buraya gelecek.</p>
            <p>
              <strong>Fiyat:</strong> 100 TL
            </p>
            <p>
              <strong>Stok Durumu:</strong> Stokta var
            </p>
            <button className="btn btn-primary">Sepete Ekle</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
