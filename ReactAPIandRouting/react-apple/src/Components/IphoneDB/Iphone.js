import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/iphones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Error: Unable to fetch "));
  }, []);
console.log(products)

  return (
    <div>
      <h1>Iphone</h1>
      <h3>The Best for the Brightest</h3>
      <div className="prod-card-wrapper ">
        {products?.map((productData) => {
          return (
            <div key={productData.product_url} className="product-card">
              <div className="prod-title">
                <h2>{productData.product_name}</h2>
              </div>
              <div className="prod-brief">
                <p>{productData.product_brief_descrption}</p>
              </div>
              <div className="prod-img">
                <img src={productData.product_img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Iphone;
