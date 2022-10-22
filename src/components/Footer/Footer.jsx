import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/iran food-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Iran Food</h5>
              <p>
              این پروژه واقعی اپلیکیشن سرویس غذا است که با دقت زیاد و برسی نکات دقیق طراحی و امنیتی توسط امیر شامحمدی ساخته شده است برای رزومه و کارفرماست.     
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">تایم سرویس دهی ایران فود</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>از شنبه تا سشنبه</span>
                <p>ازساعت 4 بعدظهر تا 22 شب</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>از چهارشنبه تا جمعه</span>
                <p>از ساعت 6 عصر تا 22 شب</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">مکان ایران فود</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>مکان:ایران|اصفهان|شاهین شهر|رازی-بغل شهر کتاب</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>شماره:۰۹۱۳۸۱۲۳۸۵۴</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>ایمیل:amirshahmohammady@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
            این اپلیکیشن توسط امیر شامحمدی ساخته شده وبرای رزومه و پیشنهاد به کارفرماست
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">مارا دنبال کنید: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/amirshahmohamadi">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/amirshahmohamadi">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/amirshahmohamadi">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/amirshahmohamadi/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
