import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import BlogSingle from "../Components/BlogsComps/BlogSingle";
import Cart from "../Components/ShoppingCart/Cart";
import Checkout from "../Components/Checkout/Checkout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogSingle />} />
      <Route path="/shopping-cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );
};

export default Routing;
