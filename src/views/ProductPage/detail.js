import Layout from "../../components/Layout";
import productList from "../../components/List";

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

  return (
    <div style={{ textAlign: "center" }}>
      <Layout title={title} subtitle={subtitle}>
        <h1>no.{productToShow.id}</h1>
        <div
          className={productToShow.joind ? "joind" : ""}
          style={{ width: "50%", position: "relative", margin: "0 auto" }}
        >
          <img
            src={`https://picsum.photos/id/${productToShow.id}/1000/600`}
            style={{ width: "100%" }}
            alt=""
          />
        </div>

        <h3>{productToShow.name}</h3>
        <p>{productToShow.date}</p>
        <p>{productToShow.detail_1}</p>
        <div className="img_content">
          {productToShow.img_1}
          {productToShow.img_2}
        </div>
        <p>{productToShow.detail_2}</p>
        <div className="img_content">
          {productToShow.img_3}
          {productToShow.img_4}
        </div>
        <p>{productToShow.detail_3}</p>
        <p className="card-body">{priceElement}</p>
        {productToShow.joind ? (
          <button className="btn btn-primary" disabled>
            千萬不要放棄治療XD1234
          </button>
        ) : (
          <button className="btn btn-primary">我要入坑</button>
        )}
      </Layout>
    </div>
  );
};

export default ProductPage;
