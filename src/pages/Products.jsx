import Header from "../components/products/Header";
import Productlist from "../components/products/Productslist";

export default function Products() {
  return (
    <section className="py-12">
      <header>
        <Header />
      </header>
      <main>
        <Productlist />
      </main>
    </section>
  );
}
