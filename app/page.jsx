"use client";

import Carousel from "@/app/(components)/Carousel";
import FeatureList from "@/app/(components)/FeatureList";
import Footer from "@/app/(components)/Footer";
import Navbar from "@/app/(components)/Navbar";
import ProductList from "@/app/(components)/ProductList";
import { useEffect, useState } from "react";

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

const getCarousels = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Carousels", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Failed to get tickets", error);
  }
};

export default function Home() {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    getCarousels().then((data) => setCarousels(data));
  }, []);
  return (
    <>
      <Navbar items={navbarListItems} />
      <Carousel items={carousels} />
      <ProductList items={productListItems} />
      <FeatureList items={featureListItems} />
      <Footer />
    </>
  );
}
