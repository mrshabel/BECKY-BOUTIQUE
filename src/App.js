import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homelayout from "./ui/Homelayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import CartContext from "./context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Routes>
          <Route path="/" element={<Homelayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
        />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
