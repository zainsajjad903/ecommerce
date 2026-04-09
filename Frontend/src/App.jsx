import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Product.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./pages/Services.jsx";
import ProductDashboard from "./pages/Dashboard/Product/ProductDashboard.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/Application/Frontend/src/pages/Dashboard/Product/ProductDashboard.jsx"
          element={<ProductDashboard />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
