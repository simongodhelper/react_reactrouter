import Layout from "../../components/Layout";
import productList from "../../components/List";

const ProductPage = (product) => {
  const title = "ProductPage";
  const subtitle = "Welcome to ProductPage";
  const productToShow = productList.find((item) => item.id === 1);

  console.log("ProductPage.js", product);
  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1 style={{ textAlign: "center" }}>no.{productToShow.id}</h1>
        <h3 style={{ textAlign: "center" }}>{productToShow.name}</h3>
        <p style={{ textAlign: "center" }}>{productToShow.date}</p>
      </Layout>
    </div>
  );
};

export default ProductPage;
