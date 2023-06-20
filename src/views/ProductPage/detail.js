import Layout from "../../components/Layout";
import productList from "../../components/List";
import Pro1 from "./pro1";
import Pro2 from "./pro2";
import ProAll from "./proAll";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const ProductPage = () => {
  const title = "ProductPage";
  const subtitle = "Welcome to ProductPage";
  const productToShow = productList.find(
    (item) => item.id === Number(localStorage.getItem("productId"))
  );

  let priceElement = <span>{productToShow.price}</span>;
  if (productToShow.price > productToShow.salePrice) {
    priceElement = (
      <p>
        <s>{productToShow.price}</s> <span>{productToShow.salePrice}</span>
      </p>
    );
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(isUserLoggedIn());
    };

    checkLoginStatus(); // Check the login status when the component mounts
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  function isUserLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  const navigate = useNavigate();

  function handleSubmit() {
    if (isUserLoggedIn()) {
      navigate("/CreditCard");
    } else {
      navigate("/Login");
    }
  }

  let proElement = null;
  if (productToShow.id === 1) {
    proElement = <Pro1 />;
  }
  if (productToShow.id === 2) {
    proElement = <Pro2 />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Layout title={title} subtitle={subtitle}>
          <h1>no.{productToShow.id}</h1>
          <div className={`img_content ${productToShow.joind ? "joind" : ""}`}>
            <img
              src={`https://picsum.photos/id/${productToShow.id}/1000/600`}
              alt=""
            />
          </div>

          <h3>{productToShow.name}</h3>
          <div className="img_content">
            <p className="product-detail">{productToShow.detail_1}</p>
          </div>
          <div className="img_content">
            {productToShow.img_1}
            {productToShow.img_2}
          </div>
          <div className="img_content">
            <p className="product-detail">{productToShow.detail_2}</p>
          </div>
          <div className="img_content">
            {productToShow.img_3}
            {productToShow.img_4}
          </div>
          {proElement}
          <ProAll />
          <div className="img_content">
            <p className="product-detail">{productToShow.detail_3}</p>
          </div>
          <p className="card-body">{priceElement}</p>
          {productToShow.joind ? (
            <button
              className="btn btn-lg btn-primary"
              disabled
              style={{
                display: "inline-block",
                margin: "0 auto",
                width: "fit-content",
              }}
            >
              您已經參加過了
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-lg btn-primary"
              style={{
                display: "inline-block",
                margin: "0 auto",
                width: "fit-content",
              }}
            >
              {isLoggedIn ? "簽下去" : "請先登入"}
            </button>
          )}
        </Layout>
      </div>
    </Form>
  );
};

export default ProductPage
