import React, { useEffect, useState } from "react";
import "./pages.css";

function BookMarkList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products data:", error);
      });
  }, []);

  useEffect(() => {
    if (filterType === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) => item.type === filterType);
      setFilteredProducts(filtered);
    }
  }, [filterType, products]);

  const renderDataByType = (item) => {
    switch (item.type) {
      case "Exhibition":
        return (
          <div>
            {item.image_url && <img src={item.image_url} alt={item.title} />}
            <h3>{item.title}</h3>
            <p>{item.sub_title}</p>
          </div>
        );
      case "Product":
        return (
          <div className="product-container">
            {item.image_url && <img src={item.image_url} alt={item.title} />}
            <div className="left-right">
              <h4>{item.title}</h4>
              <h4 className="Pt-color">{item.discountPercentage}%</h4>
            </div>
            <p className="right">
              {item.price && Number(item.price).toLocaleString()}원
            </p>
          </div>
        );
      case "Category":
        return (
          <div>
            {item.image_url && <img src={item.image_url} alt={item.title} />}
            <h3>#{item.title}</h3>
          </div>
        );
      case "Brand":
        return (
          <div className="product-container">
            {item.brand_image_url && (
              <img src={item.brand_image_url} alt={item.brand_name} />
            )}
            <div className="left-right">
              <h3>{item.brand_name} </h3>
              <h3>관심고객수</h3>
            </div>
            <p className="right">
              {item.follower && Number(item.follower).toLocaleString()}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  return (
    <div className="main-container">
      <div className="button-container">
        <button
          className={filterType === "" ? "active" : ""}
          onClick={() => handleFilter("")}
        >
          <img src="/전체.png" alt="전체" />
          <br />
          전체
        </button>
        <button
          className={filterType === "Product" ? "active" : ""}
          onClick={() => handleFilter("Product")}
        >
          <img src="/상품.png" alt="상품" />
          <br />
          상품
        </button>
        <button
          className={filterType === "Category" ? "active" : ""}
          onClick={() => handleFilter("Category")}
        >
          <img src="/카테고리.png" alt="카테고리" />
          <br />
          카테고리
        </button>
        <button
          className={filterType === "Exhibition" ? "active" : ""}
          onClick={() => handleFilter("Exhibition")}
        >
          <img src="/기획전.png" alt="기획전" />
          <br />
          기획전
        </button>
        <button
          className={filterType === "Brand" ? "active" : ""}
          onClick={() => handleFilter("Brand")}
        >
          <img src="/브랜드.png" alt="브랜드" />
          <br />
          브랜드
        </button>
      </div>
      <h2>북마크 리스트</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            {renderDataByType(product)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookMarkList;
