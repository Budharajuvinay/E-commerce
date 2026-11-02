import "./index.css";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchProductsData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data.products);
      setAllProducts(data.products);
    };

    fetchProductsData();
  }, []);

  const searchProduct = (event) => {
    const value = event.target.value;
    setSearchInput(value);

    const filteredData = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filteredData);
  };

  return (
    <div>
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search product"
          value={searchInput}
          onChange={searchProduct}
        />
      </div>

      <div className="abc">
        {products.map((item) => (
          <ProductCard pdct={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;