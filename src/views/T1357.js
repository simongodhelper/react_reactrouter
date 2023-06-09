import Layout from "../components/Layout";
import productList from "../components/List";
import ProductDiv from "../components/ProductDiv";
import moment from "moment";

const T1357 = () => {
  const renderProductList = () => {
    const filteredList = productList.filter(
      (product) =>
        [1, 3, 5, 7].includes(product.id) && !(product.price >= 10000)
    );
    //時間排序降冪
    const sortedProductList = filteredList.sort((a, b) =>
      moment(b.date).diff(moment(a.date))
    );

    return sortedProductList.map((product) => {
      //是否已參加
      let joinElement = "";
      if (product.joind) {
        joinElement = "joind";
      }
      //售價
      let priceElement = <span>{product.salePrice}</span>;
      if (product.price > product.salePrice) {
        priceElement = (
          <p>
            <s>{product.price}</s> <span>{product.salePrice}</span>
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

  return (
    <div>
      <Layout title="1,3,5,7" subtitle="1,3,5,7">
        <h1 style={{ textAlign: "center" }}>
          只顯示1,3,5,7並按時間排序，售價大於10000不顯示
        </h1>
        <section>
          <div className="row_1">{renderProductList()}</div>
        </section>
      </Layout>
    </div>
  );
};

export default T1357;
