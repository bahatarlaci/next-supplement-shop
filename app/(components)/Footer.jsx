import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Supplement Shop</h5>
              <p>© 2024 Supplement Shop. Tüm hakları saklıdır.</p>
            </div>
            <div className="col-md-6">
              <h5>İletişim</h5>
              <ul className="list-unstyled">
                <li>Email: info@supplementshop.com</li>
                <li>Telefon: +90 123 456 7890</li>
                <li>Adres: İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
