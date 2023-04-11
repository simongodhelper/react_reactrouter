import Layout from "../../components/Layout";

const ProductPage = () => {
  const title = "ProductPage";
  const subtitle = "Welcome to ProductPage";

  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1 style={{ textAlign: "center" }}>ProductPage</h1>
      </Layout>
    </div>
  );
};

export default ProductPage;
