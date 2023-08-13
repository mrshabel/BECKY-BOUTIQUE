import Filter from "./Filter";

export default function Header() {
  return (
    <div className="mb-4 px-[12px]">
      <header className="text-center mb-8 lg:px-[12px]">
        <h1 className="font-semibold text-[20px] mb-2">Beckys</h1>
        <p className="font-extralight text-[14px]">
          Beckys Boutique: Embrace a New Era of Style. Keeping True to Our
          Fashion Legacy, Experience Iconic Designs and Timeless Elegance. From
          Signature Denim to Chic Co-ords, Discover Your Perfect Look. Infused
          with the Essence of Endless Possibilities, Start Your Fashion Voyage
          Today. Explore the Full Collection, available exclusively at Beckys
        </p>
      </header>
      <div className="pb-4">
        <Filter />
      </div>
    </div>
  );
}
