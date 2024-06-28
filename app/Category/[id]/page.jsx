import Footer from '@/app/(components)/Footer';
import Navbar from '@/app/(components)/Navbar';
import ProductList from '@/app/(components)/ProductList';
import React from 'react';

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Kategori Adı</h1>
      </div>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Category;
