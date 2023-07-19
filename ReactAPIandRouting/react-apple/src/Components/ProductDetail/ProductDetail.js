import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  //console.log(id)

  useEffect(() => {
    fetch("http://localhost:4000/get-info")
      .then((res) => res.json())
      .then((data) => {
        const productDetails = data.products;
        // console.log(productDetails)
        const singleProduct = productDetails.filter(
          (product) => product.product_url === id
        );
        setProduct(singleProduct);
      })
      .catch(() => console.log("Error: Unable to fetch "));
  }, [id]);

  console.log(product);

  return (
    <div>
      <div className="headlines  m-5 ">
        <h1>Iphone</h1>
        <h3>The Best for the Brightest</h3>
      </div>
      <div className="prod-card-wrapper ">
        {product?.map((productData) => {
          return (
            <div
              key={productData.product_url}
              className="product-card row justify-content-center align-items-center h-100 mb-3"
            >
              <div className= "left col-sm-12 col-md-6">
                <div className="prod-title">
                  <h2 className="fs-1 fw-bold">{productData.product_name}</h2>
                </div>
                <div className="prod-brief">
                  <p className="mb-0">{productData.product_brief_descrption}</p>
                </div>

                <div className="prod-price">
                  <p className="mb-0">{productData.starting_price}</p>
                </div>
                <div className="price-range">
                  <p className="mb-0">{productData.price_range}</p>
                </div>
                
                <div className="link pt-3">
                </div>
              </div>
              <div className="right col-sm-12 col-md-6 ">
                <div className="prod-img">
                  <img src={productData.product_img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
