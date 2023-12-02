import React from "react";
import useCartStore from "../store/cartStore";
import "../style/cart.css"; 
import useShowcart from "../store/cartshowStore";
const Cart = () => {
  const { clearCart, cartProducts } = useCartStore();
  const { Cart }=useShowcart()

 

  return (
    <div className={Cart ? "cart__off":"cart"}>
      <section className="cart__container">
        <ul className="cart__list">
          {cartProducts.map((product) => (
            <li key={product.id} className="cart__item">
              <div className="cart__product">
                <img
                  className="cart__product-image"
                  src={product.image}
                  alt=""
                />
                <div className="cart__product-details">
                  <span className="cart__product-title">{product.title}</span>
                  <span className="cart__product-price">${product.price}</span>
                </div>
              </div>
                <button className="cart__button--Checkout">Checkout</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cart;
