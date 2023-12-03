import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useCategory from "../store/useCategory";
import "../style/nabvar.css";
import useShowcart from "../store/cartshowStore";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const over = () => window.innerWidth < 817;

  const [overview, setOver] = useState(over);

  useEffect(() => {
    const handleResize = () => {
      setOver(over);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const url = "https://fakestoreapi.com/products/categories";
  const [data, getApi] = useFetch(url);
  const { newCategory } = useCategory();
  const { showCart, showMenu, Onmenu } = useShowcart();
  const { cartProducts } = useCartStore();
  const [cantidad, setCantidad] = useState();

  useEffect(() => {
    const totalProductInCart = cartProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setCantidad(totalProductInCart);
  }, [cartProducts]);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <section className="navbar">
      <nav className="navbar__nav">
        <span className="navbar__title">
         {overview ? <img onClick={showMenu} src="./icon-menu.svg" alt="" /> : ""}
          Productos
        </span>
        <ul className={Onmenu ? "navbar__list" : "navbar__listoff"}>
          {data.map((category) => (
            <li
              onClick={() => {
                newCategory(category);
              }}
              className="navbar__item"
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
        <span onClick={showCart} className="nabvar__cart">
          <span className="cart__cuantityProducts">{cantidad}</span>
          <img src="./icon-cart.svg" alt="" />
        </span>
      </nav>
    </section>
  );
};

export default Navbar;
