import Layout from "../components/Layout";
import productList from "../components/List";
import ProductDiv from "../components/ProductDiv";
import moment from "moment";

const HomeView = () => {
  const renderProductList = () => {
    console.log("productList", productList);
    return productList.map((product) => {
      let Date1 = moment(product.date).toDate();
      console.log("Date1", Date1);
      let joinElement = "";
      if (product.joind && Date1 > new Date() && product.price >= 1000) {
        joinElement = "joind";
      }

      let priceElement = <p>$ {product.price}</p>;
      if (product.isSale) {
        priceElement = (
          <p>
            $ <s>{product.price}</s> {product.salePrice}
          </p>
        );
      }

      return (
        <ProductDiv
          product={product}
          key={product.id}
          joinElement={joinElement}
          priceElement={priceElement}
        />
      );
    });
  };

  const title = "Home";
  const subtitle = "Welcome to our online store";

  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1 style={{ textAlign: "center" }}>
          All Product，按照id排序，過期不能點
        </h1>
        <section>
          <div className="row_1">{renderProductList()}</div>
        </section>
      </Layout>
    </div>
  );
};

export default HomeView;
