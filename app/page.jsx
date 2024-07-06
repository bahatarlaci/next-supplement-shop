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

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Products", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Failed to get tickets", error);
  }
};

export default function Home() {
  const [carousels, setCarousels] = useState([]);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getCarousels().then((data) => setCarousels(data));
    getProducts().then((data) => setProductList(data));
  }, []);
  return (
    <>
      <Navbar items={navbarListItems} />
      <Carousel items={carousels} />
      <ProductList items={productList} />
      <FeatureList items={featureListItems} />
      <Footer />
    </>
  );
}
