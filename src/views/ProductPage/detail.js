import Layout from "../../components/Layout";
import productList from "../../components/List";

const ProductPage = (product) => {
  const title = "ProductPage";
  const subtitle = "Welcome to ProductPage";
  const productToShow = productList.find(
    (item) => item.id === Number(localStorage.getItem("productId"))
  );

  let priceElement = <p>$ {productToShow.price}</p>;
  if (productToShow.isSale) {
    priceElement = (
      <p>
        $ <s>{productToShow.price}</s> {productToShow.salePrice}
      </p>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Layout title={title} subtitle={subtitle}>
        <h1>no.{productToShow.id}</h1>
        <img
          src={`https://picsum.photos/id/${productToShow.id}/1000/600`}
          style={{ width: "50%" }}
          alt=""
        />
        <h3>{productToShow.name}</h3>
        <p>{productToShow.date}</p>
        <p>{productToShow.detail_1}</p>
        <div>{productToShow.img_1}</div>
        <p>{productToShow.detail_2}</p>
        <p>{priceElement}</p>
      </Layout>
    </div>
  );
};

export default ProductPage;
