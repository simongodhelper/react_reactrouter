import Layout from "../../components/Layout";
import productList from "../../components/List";

const ProductPage = (product) => {
  const title = "ProductPage";
  const subtitle = "Welcome to ProductPage";
  const productToShow = productList.find((item) => item.id === 1);

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
        <p>{productToShow.detail}</p>
      </Layout>
    </div>
  );
};

export default ProductPage;
