import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
//import ProductPage from "../views/ProductPage";

const ProductDiv = ({ product, joinElement, priceElement }) => {
  let Date1 = moment(product.date).toDate();

  return (
    <div key={product.id} className={`col_1`}>
      {Date1 > new Date() && product.price >= 1000 ? (
        <div className={`card disable ${joinElement}`}>
          <img src={`https://picsum.photos/id/${product.id}/1000/600`} alt="" />
          <div className="card-body">
            <h3>{product.name}</h3>
            {priceElement}
          </div>
        </div>
      ) : (
        <Link
          to={`/ProductPage/${product.id}`}
          className={`card ${joinElement}`}
        >
          <img src={`https://picsum.photos/id/${product.id}/1000/600`} alt="" />
          <div className="card-body">
            <h3>{product.name}</h3>
            {priceElement}
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductDiv;
