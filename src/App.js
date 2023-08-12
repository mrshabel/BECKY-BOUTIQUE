import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homelayout from "./ui/Homelayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
