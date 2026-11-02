import { Link } from "react-router";
import "./index.css";

const ProductCard = (props) => {
  const {
    thumbnail,
    brand,
    title,
    price,
    id,
    rating,
    category,
    discountPercentage,
  } = props.pdct;

  return (
    <Link className="product" to={`/products/${id}`}>
      <div className="main">
        <img className="image" src={thumbnail} alt={title} />

        <div className="details">
          <h2 className="brand">{brand}</h2>
          <p className="category">{title}</p>
        </div>

        <div className="sub">
          <div>
            <p className="price">${price}</p>
            <p className="offer">{Math.round(discountPercentage)}% OFF</p>
          </div>

          <div className="rating">
            <p className="review">★ {rating}</p>
            <p className="noof">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;