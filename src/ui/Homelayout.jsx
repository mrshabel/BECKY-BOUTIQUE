import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function Homelayout() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main className="pt-10 md:pt-20 md:px-4 overflow-x-hidden ">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
