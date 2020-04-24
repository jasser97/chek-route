import React from "react";
const Product = ({ name, params, data }) => {
  var product = data.find((p) => {
    return p.id === params.productId;
  });
  var productData;

  if (product)
    productData = (
      <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  else productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};
export default Product;
