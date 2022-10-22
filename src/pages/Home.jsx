import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";


import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "ارسال فوری",
    imgUrl: featureImg01,
    desc: " این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است",
  },

  {
    title:"پشتیبانی 24ساعته",
    imgUrl: featureImg02,
    desc: " این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است",
  },

  
    {
    title:"تو خونت سفارش بده",
      imgUrl: featureImg03,
      desc: " این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است",
    },
  
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">با خیال راحت سفارش  بده</h5>
                <h1 className="mb-4 hero__title">
                  <span>چیزی نخوردی؟</span> همین الان سفارش بده<br /> 
                  <span> غذا سه سوته در خونته</span>
                </h1>

                <p>
             با ایران فود راحت سفارش بده و منتظر غذای خوشمزت باش
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    الان سفارش بده<i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">دیدن تمام غذای ایران فود</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    سرویس دهی سریع
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                تظمین امنیت کامل غذای شما
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">خدمات ما چیست؟</h5>
              <h2 className="feature__title">ایران فود انواع پیتزا و همبرگر های خوشمزه را دارد</h2>
              <h2 className="feature__title">
                ما سفارشتو <span>تا خانه شما می آوریم</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
              </p>
              <p className="feature__text">
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                {" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>منوی رستوران</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
           <img src={foodCategoryImg01} alt="pro"/>
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  چرا <span>ایران فود؟</span>
                </h2>
                <p className="tasty__treat-desc">
                این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
            
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> تازه ترین و داغ ترین غذاها
                    </p>
                    <p className="choose__us-desc">
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                  
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> پشتیبانی همیشگی
                    </p>
                    <p className="choose__us-desc">
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                 .
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>هرجای ایران هستی
                      سفارش بده{" "}
                    </p>
                    <p className="choose__us-desc">
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                   
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>پیتزا مخصوص</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">پیشنهاد</h5>
                <h2 className="testimonial__title mb-4">
               پشنهاد ایران فود به شما <span> مشتریان همیشگی</span> چیست؟
                </h2>
                <p className="testimonial__desc">
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
              این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
                
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
