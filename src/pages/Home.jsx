import "../style/home.css"
import Products from "../components/Products";
import Navbar from "../components/navbar";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <div className="main__container">
      <Navbar/>
      <Products/>
      <Cart/>
    </div>
  );
};

export default Home;
