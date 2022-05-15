import React from "react";
import DetailsWithPrice from "../common/detail-price";
import { Col, Container, Row } from "reactstrap";
import { gql ,useQuery } from "@apollo/client";

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        color
        image_id
        variant_id
        size
      }
      images {
        image_id
        src
      }
    }
  }
`;

const imgData = ["/assets/images/fashion/pro/001.jpg", "/assets/images/fashion/pro/002.jpg", "/assets/images/fashion/pro/003.jpg", "/assets/images/fashion/pro/004.jpg"];

const FourImagePage = () => {
  var { data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <section>
      <div className="collection-wrapper ratio_asos">
        <Container>
          <Row>
            <Col lg="6">
              <Row className="product_image_4">
                {imgData.map((data, index) => {
                  return (
                    <Col xs="6" key={index}>
                      <div>
                        <img
                          src={data}
                          alt=""
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            {data ? (
              <Col lg="6" className="rtl-text">
                <DetailsWithPrice item={data.product} />
              </Col>
            ) : (
              "false"
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default FourImagePage;
