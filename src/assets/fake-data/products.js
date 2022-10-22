// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";
const products = [
  {
    id: "01",
    title: "همبرگر مرغ",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "همبرگر",
    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "02",
    title: "پیتزا سبزیجات",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "پیتزا",
    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
   
  },

  {
    id: "03",
    title: "پنیر پیتزای مارگاریتا",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "پیتزا",
    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "04",
    title: "پیتزا مکزیکی",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "پیتزا",
    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "05",
    title: "چیز برگر",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "همبرگر",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },
  {
    id: "06",
    title: "رویال چیز برگر",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "همبرگر",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "07",
    title: "پیتزا یک نفره",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "پیتزا",


    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "08",
    title: "مینی پیتزا",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "پیتزا",


    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "09",
    title: "پیتزا با قارچ",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "پیتزا",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "10",
    title: "همبرگر مخصوص",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "همبرگر",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "11",
    title: "نان سبوس ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "نان",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "12",
    title: "نان محلی ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "نان",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },

  {
    id: "13",
    title: "نان رژیمی ",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "نان",

    desc: "  این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است    ",
  },
];

export default products;
