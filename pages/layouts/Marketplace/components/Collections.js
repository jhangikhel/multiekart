import React from "react";
import { Container, Row, Col, Media } from "reactstrap";

const Data = [
  {
    img: '/assets/images/fashion/banner/5.jpg',
    title: "save 30%",
    desc: "women",
    link: "#",
    classes: "p-right text-right",
  },
  {
    img: '/assets/images/fashion/banner/10.jpg',
    title: "save 60%",
    desc: "headset",
    link: "#",
    classes: "p-right text-right",
  },
  {
    img: '/assets/images/fashion/banner/8.jpg',
    title: "save 60%",
    desc: "women",
    link: "#",
    classes: "p-right text-right",
  },
  {
    img: '/assets/images/fashion/banner/9.jpg',
    title: "save 60%",
    desc: "jwellery",
    link: "#",
    classes: "p-left",
  },
];

const MasterCollections = ({ img, title, desc, link, classes }) => {
  return (
    <Col lg="3" md="6">
      <a href={link}>
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media src={img} className="img-fluid blur-up lazyload bg-img" />
          </div>
          <div className="contain-banner banner-4">
            <div>
              <h4>{title}</h4>
              <h2>{desc}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const Collections = () => (
  <section className="banner-padding banner-furniture ratio2_1">
    <Container fluid={true}>
      <Row className="partition4">
        {Data.map((data, i) => {
          return (
            <MasterCollections
              key={i}
              img={data.img}
              link={data.link}
              title={data.title}
              desc={data.desc}
              classes={data.classes}
            />
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Collections;
