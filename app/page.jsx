import Carousel from "./(components)/Carousel";
import FeatureList from "./(components)/FeatureList";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";
import ProductList from "./(components)/ProductList";

const navbarListItems = [
  { id: 1, title: "Protein Tozu", url: "/protein-tozu" },
  { id: 2, title: "Kilo & Hacim", url: "/kilo-hacim" },
  {
    id: 3,
    title: "Amino Asit",
    url: "/amino-asit",
  },
  { id: 4, title: "Kreatin", url: "/kreatin" },
];

const carouselListItems = [
  {
    id: 1,
    title: "Product 1",
    description: "Description 1",
    image: "https://dummyimage.com/800x300/000/fff",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description 2",
    image: "https://dummyimage.com/800x300/000/fff",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description 3",
    image: "https://dummyimage.com/800x300/000/fff",
  },
];

const productListItems = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    image: "https://dummyimage.com/300x300/000/fff",
    categoryId: Math.floor(Math.random() * 4) + 1,
  },
];

const featureListItems = [
  {
    id: 1,
    title: "ÜRÜN DESTEĞİ",
    description:
      "Aldığınız ürünler ile ilgili bize kolayca ulaşabilir ve merak ettiklerinizi uzman ekibimize sorabilirsiniz.",
    icon: "bi bi-chat-left-text-fill",
  },
  {
    id: 2,
    title: "HIZLI KARGO",
    description:
      "400 TL ve üzeri ürünlerde kargo ücretsiz. Kargolar en hızlı şekilde güzelce paketlenip adresinize gönderilmektedir.",
    icon: "bi bi-truck",
  },
  {
    id: 3,
    title: "ÜRETİM",
    description:
      "Ürünlerimizi gıda üretim kalite standartlarına uygun ve sertifikasyonlarına sahip kendi üretim tesisimizde üretiyoruz.",
    icon: "bi bi-building",
  },
];

export default function Home() {
  return (
    <>
      <Navbar items={navbarListItems} />
      <Carousel items={carouselListItems} />
      <ProductList items={productListItems} />
      <FeatureList items={featureListItems} />
      <Footer />
    </>
  );
}
