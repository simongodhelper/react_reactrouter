import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const ProductDiv = ({ product, joinElement, priceElement }) => {
  let Date1 = moment(product.date).toDate();

  //是否過期Date1 < new Date()
  return (
    <div key={product.id} className={`col_1`}>
      {Date1 < new Date() ? (
        <div className={`card disable ${joinElement}`}>
          <img src={`https://picsum.photos/id/${product.id}/1000/600`} alt="" />
          <div className="card-body">
            <h3>{product.name}</h3>
            {priceElement}
          </div>
        </div>
      ) : (
        <Link to="../ProductPage/detail">
          <div
            className={`card ${joinElement}`}
            onClick={() => {
              localStorage.setItem("productId", product.id);
            }}
          >
            <img
              src={`https://picsum.photos/id/${product.id}/1000/600`}
              alt=""
            />
            <div className="card-body">
              <h3>{product.name}</h3>
              {priceElement}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductDiv;
