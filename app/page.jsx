import Carousel from './(components)/Carousel';
import FeatureList from './(components)/FeatureList';
import Footer from './(components)/Footer';
import Navbar from './(components)/Navbar';
import ProductList from './(components)/ProductList';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductList />
      <FeatureList />
      <Footer />
    </>
  );
}
