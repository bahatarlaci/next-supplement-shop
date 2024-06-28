import React from 'react';
import { FaHeadset, FaShippingFast, FaIndustry, FaMedal } from 'react-icons/fa';

const FeatureList = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card h-100 text-center p-3 bg-light">
              <div className="card-body">
                <FaHeadset size={50} className="mb-3" />
                <h5 className="card-title">ÜRÜN DESTEĞİ</h5>
                <p className="card-text">
                  Aldığınız ürünler ile ilgili bize kolayca ulaşabilir ve merak
                  ettiklerinizi uzman ekibimize sorabilirsiniz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3 bg-light">
              <div className="card-body">
                <FaShippingFast size={50} className="mb-3" />
                <h5 className="card-title">HIZLI KARGO</h5>
                <p className="card-text">
                  400 TL ve üzeri ürünlerde kargo ücretsiz. Kargolar en hızlı
                  şekilde güzelce paketlenip adresinize gönderilmektedir.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3 bg-light">
              <div className="card-body">
                <FaIndustry size={50} className="mb-3" />
                <h5 className="card-title">ÜRETİM</h5>
                <p className="card-text">
                  Ürünlerimizi gıda üretim kalite standartlarına uygun ve
                  sertifikasyonlarına sahip kendi üretim tesisimizde üretiyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3 bg-light">
              <div className="card-body">
                <FaMedal size={50} className="mb-3" />
                <h5 className="card-title">YÜKSEK KALİTE</h5>
                <p className="card-text">
                  Hammaddelerimizin tamamını alanında uzman global üreticilerden
                  tedarik ediyoruz, sahip olduğumuz kalite sertifikasyonları
                  gereğince tedarikçilerimizi ve ürünlerini sürekli
                  denetliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
