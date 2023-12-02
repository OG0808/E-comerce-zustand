import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useCartStore from "../store/cartStore";
import "../style/products.css"
import useCategory from "../store/useCategory";

const Products = () => {
  const { addItem, cartProducts } = useCartStore();

  const { category } = useCategory()

  const url = `https://fakestoreapi.com/products/category/${category}`;
  const url2 = "https://fakestoreapi.com/products"
 
  const [ data2, getUrl2 ] = useFetch(url2);
 
  const [ data, getUrl ] = useFetch(url);
  
  useEffect(() => {
    if (category === '') {
      getUrl2();
    } else{
      getUrl();
    }
  }, [category]);
  
       

  return (
    <div className="products">
      <ul className="products__list">
        {(category ? data : data2)?.map((product) => (
          <li key={product.id} className="products__item">
            <img className="products__image" src={product.image} alt="" />
            <div className="products__titleAndPrice">
            <span className="product__title">{product.title}</span>
            <span className="product__price">${product.price}</span>
            </div>
            
            <button
              className="products__button"
              onClick={() => addItem(product)}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
