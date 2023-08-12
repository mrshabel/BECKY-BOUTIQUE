import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function Homelayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="pt-20 px-4">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
