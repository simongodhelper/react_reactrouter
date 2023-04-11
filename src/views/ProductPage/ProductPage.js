import Layout from "../components/Layout";
import productList from "../components/List";

const ProductPage = () => {
  const title = "商品單頁";
  const subtitle = "Welcome to our online XXXstore";

  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1 style={{ textAlign: "center" }}>商品單頁</h1>
        <img src={`https://picsum.photos/id/${product.id}/1000/600`} alt="" />
        <div className="card-body">
          <h3>{product.name}</h3>
          {priceElement}
        </div>
      </Layout>
    </div>
  );
};

export default ProductPage;
