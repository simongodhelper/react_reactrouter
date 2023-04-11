import React from "react";
import moment from "moment";

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
        <div
          className={`card ${joinElement}`}
          onClick={() =>
            (window.location.href = `https://www.youtube.com/watch?v=${product.id}`)
          }
        >
          <img src={`https://picsum.photos/id/${product.id}/1000/600`} alt="" />
          <div className="card-body">
            <h3>{product.name}</h3>
            {priceElement}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDiv;
