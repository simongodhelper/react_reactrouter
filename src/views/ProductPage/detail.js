import Layout from "../../components/Layout";
import productList from "../../components/List";
import Pro1 from "./pro1";
import Pro2 from "./pro2";
import ProAll from "./proAll";

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

  // 檢查產品id是否為1，若是則引入Pro1組件
  let proElement = null;
  if (productToShow.id === 1) {
    proElement = <Pro1 />;
  }
  if (productToShow.id === 2) {
    proElement = <Pro2 />;
  }

  return (
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
          <button className="btn btn-primary" disabled>
            千萬不要放棄治療
          </button>
        ) : (
          <button className="btn btn-primary">簽下去</button>
        )}
      </Layout>
    </div>
  );
};

export default ProductPage;
