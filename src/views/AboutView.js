import Layout from "../components/Layout";
import productList from "../components/List";
import ProductDiv from "../components/ProductDiv";
import moment from "moment";

const AboutView = () => {
  const renderProductList = () => {
    const filteredList = productList.filter(
      (product) =>
        [1, 3, 5, 7].includes(product.id) && !(product.salePrice >= 10000)
    );
    const sortedProductList = filteredList.sort((a, b) =>
      moment(b.date).diff(moment(a.date))
    );

    return sortedProductList.map((product) => {
      let Date1 = moment(product.date).toDate();

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

  const title = undefined;
  const subtitle = undefined;

  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1 style={{ textAlign: "center" }}>
          1,3,5,7並按時間排序，售價大於10000不顯示
        </h1>
        <section>
          <div className="row_1">{renderProductList()}</div>
        </section>
      </Layout>
    </div>
  );
};

export default AboutView;
