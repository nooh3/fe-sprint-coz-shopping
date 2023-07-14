import React, { useEffect, useState } from "react";
import "./pages.css";

function Main() {
  return (
    <>
      <ProductMarkList />
      <BookMarkList />
    </>
  );
}

function ProductMarkList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((item) => item.type);
        const randomProducts = getRandomItems(filteredProducts, 4);
        setProducts(randomProducts);
      })
      .catch((error) => {
        console.error("Error fetching products data:", error);
      });
  }, []);

  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

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

  return (
    <div className="main-container">
      <h2>상품 리스트</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {renderDataByType(product)}
          </div>
        ))}
      </div>
    </div>
  );
}

function BookMarkList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((item) => item.type);
        const randomProducts = getRandomItems(filteredProducts, 4);
        setProducts(randomProducts);
      })
      .catch((error) => {
        console.error("Error fetching products data:", error);
      });
  }, []);

  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

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

  return (
    <div className="main-container">
      <h2>북마크 리스트</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {renderDataByType(product)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
