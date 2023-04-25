import Layout from "../components/Layout";
import productList from "../components/List";
import ProductDiv from "../components/ProductDiv";
import moment from "moment";

const ComputerView = () => {
  const renderProductList = () => {
    const filteredList = productList.filter(
      (product) => product.kind === "Computer"
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
      <Layout title="Computer" subtitle="Computer">
        <h1 style={{ textAlign: "center" }}>Computer</h1>
        <section>
          <div className="row_1">{renderProductList()}</div>
        </section>
      </Layout>
    </div>
  );
};

export default ComputerView;
