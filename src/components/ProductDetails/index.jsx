import { useParams } from "react-router";
import "./index.css";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();

  const api = `https://dummyjson.com/products/${id}`;

  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(api);
      const data = await res.json();
      setProductItem(data);
    };

    fetchData();
  }, [id]);

  const {
    thumbnail,
    brand,
    title,
    price,
    rating,
    category,
    discountPercentage,
  } = productItem;

  return (
    <div>
      <div className="main">
        <img className="image" src={thumbnail} alt={title} />

        <div className="details">
          <h2 className="brand">{brand}</h2>
          <p className="category">{title}</p>
        </div>

        <div className="sub">
          <div>
            <p className="price">${price}</p>
            <p className="offer">
              {Math.round(discountPercentage)}% OFF
            </p>
          </div>

          <div className="rating">
            <p className="review">★ {rating}</p>
            <p className="noof">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;