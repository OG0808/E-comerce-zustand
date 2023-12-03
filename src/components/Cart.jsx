import React from "react";
import useCartStore from "../store/cartStore";
import "../style/cart.css";
import useShowcart from "../store/cartshowStore";
const Cart = () => {
  const { Cart, showCart } = useShowcart();
  const {
    clearCart,
    cartProducts,
    removeItem,
    totalPrice,
    addItem,
    decreaseItem,
  } = useCartStore();

  return (
    <div className={Cart ? "cart__off" : "cart"}>
      <section className="cart__container">
        {totalPrice ? (
          <button onClick={clearCart} className="cart__empty">
            Empty cart
          </button>
        ) : (
           <div className="cart__close">
             <span className="cart__empty">Cart is empty</span>
            <img onClick={showCart} src="./src/assets/icon-close.svg" alt="" />
           </div>
        )}
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
              <div>
                <div className="cart__cantidadAndremove">
                  <button
                    onClick={() => {
                      removeItem(product.id);
                    }}
                    className="cart__button--remove"
                  >
                    Remove
                  </button>
                  <button
                    className="cart__moreproduct"
                    onClick={() => decreaseItem(product.id)}
                  >
                   <img src="./icon-minus.svg" alt="" />
                  </button>
                  <button
                    className="cart__leesproduct"
                    onClick={() => addItem(product)}
                  >
                     <img src="./icon-plus.svg" alt="" />
                  </button>
                  <span className="cart__quantity">
                    Amount {product.quantity}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="cart__totalPriceAndCheck">

        {totalPrice ? (
          <button className="cart__button--Checkout">Checkout</button>
        ) : (
          ""
        )}
        {totalPrice ? (
          <div className="clar__totalprice">Total ${totalPrice.toFixed(1)}</div>
        ) : (
          ""
        )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
