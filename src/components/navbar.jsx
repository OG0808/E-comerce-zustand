import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useCategory from "../store/useCategory";
import "../style/nabvar.css"
import useShowcart from "../store/cartshowStore";

const Navbar = () => {
  const url = "https://fakestoreapi.com/products/categories";
  const [ data, getApi ] = useFetch(url);
  const { newCategory} = useCategory();
  const { showCart} = useShowcart()
  
  useEffect(() => {
    getApi()
  }, [])
  
 
  return (
    <section className="navbar">
      <nav className="navbar__nav">
        <span className="navbar__title">Productos</span>
        <ul className="navbar__list">
          {data.map((category) => (
            <li onClick={()=>{newCategory(category)}} className="navbar__item" key={category}>
              {category}
            </li>
            
          ))}
        </ul>
         <span onClick={showCart} className="nabvar__cart"><img src="./src/assets/icon-cart.svg" alt="" /></span>
      </nav>
    </section>
  );
};

export default Navbar;
