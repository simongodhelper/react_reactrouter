import Layout from "../../components/Layout";
import productList from "../../components/List";
import Pro1 from "./pro1";
import Pro2 from "./pro2";
import ProAll from "./proAll";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "react-bootstrap/Form";

const FormSubmitHandler = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // 检查用户是否已登录
    if (auth.currentUser) {
      console.log("已登录", auth.currentUser);
      navigate("/CreditCard");
    } else {
      console.log("未登录");
      // 用 Firebase Auth 登录
      const email = "example@example.com";
      const password = "password";
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log("已登录", res);
          navigate("/Login");
        })
        .catch((err) => {
          //TODO: error handling
        });
    }
  };
  return formSubmitHandler;
};

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

  const formSubmitHandler = FormSubmitHandler();

  // 檢查產品id是否為1，若是則引入Pro1組件
  let proElement = null;
  if (productToShow.id === 1) {
    proElement = <Pro1 />;
  }
  if (productToShow.id === 2) {
    proElement = <Pro2 />;
  }

  return (
    <Form onSubmit={formSubmitHandler}>
      <div style={{ textAlign: "center" }}>
        <Layout title={title} subtitle={subtitle}>
          <h1>no.{productToShow.id}</h1>
          <div className={`img_content ${productToShow.joind ? "joind" : ""}`}>
            <img
              src={`https://picsum.photos/id/${productToShow.id}/1000/600`}
              alt=""
            />
          </div>

          <h3>{productToShow.name}</h3>
          <div className="img_content" style={{ textAlign: "left" }}>
            <p className="product-detail">{productToShow.detail_1}</p>
          </div>
          <div className="img_content">
            {productToShow.img_1}
            {productToShow.img_2}
          </div>
          <div className="img_content" style={{ textAlign: "left" }}>
            <p className="product-detail">{productToShow.detail_2}</p>
          </div>
          <div className="img_content">
            {productToShow.img_3}
            {productToShow.img_4}
          </div>
          {proElement}
          <ProAll />
          <div className="img_content" style={{ textAlign: "left" }}>
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
              千萬不要放棄治療
            </button>
          ) : (
            <button
              bsStyle="primary"
              bsSize="large"
              className="btn btn-lg btn-primary"
              style={{
                display: "inline-block",
                margin: "0 auto",
                width: "fit-content",
              }}
            >
              簽下去
            </button>
          )}
        </Layout>
      </div>
    </Form>
  );
};

export default ProductPage;
