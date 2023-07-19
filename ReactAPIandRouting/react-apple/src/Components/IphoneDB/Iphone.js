import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/get-info")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Error: Unable to fetch "));
  }, []);
  console.log(products);
  let flip = true;
  return (
    <div>
      <h1>Iphone</h1>
      <h3>The Best for the Brightest</h3>
      <div className="prod-card-wrapper ">
        {products?.map((productData) => {
          let order1 = 1;
          let order2 = 2;
          if (flip) {
            order1 = 2;
            order2 = 1;
            flip = !flip;
          } else {
            flip = !flip;
          }
          return (
            <div
              key={productData.product_url}
              className="product-card row justify-content-center align-items-center h-100 m-5 pt-5 w-80"
            >
              <div className={`left col-sm-12 col-md-6 order-${order2}`}>
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
                  <Link to="" className="link-primary ">
                  Learn More
                </Link>
                </div>
              </div>
              <div className={`right col-sm-12 col-md-6 order-${order1}`}>
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

export default Iphone;
