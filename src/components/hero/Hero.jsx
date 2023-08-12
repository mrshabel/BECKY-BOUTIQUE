import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";
import Carousel from "../Carousel";
import { images } from "../../data/heroData";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 mb-4 md:flex-row mt-6">
      <aside className="px-4 md:pt-6 md:w-[60%] flex flex-col gap-3">
        <h1 className="uppercase font-bold ">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("up to 50% off")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome to Beckys Boutique")
                .start();
            }}
          />
        </h1>
        <h3 className="text-3xl md:text-7xl capitalize text-orange-500 font-bold">
          Clothing for all
        </h3>
        <p className="md:text-xl ">
          Your last stop shop for all your clothing wear
        </p>
        <button className="py-2 px-3 mt-2 uppercase text-[12px] bg-gray-800 text-white rounded-sm tracking-wide w-fit ">
          <Link to="products" className="">
            Shop now
          </Link>
        </button>
      </aside>
      <aside className=" md:w-[400px] ">
        <div className="">
          {/* <HeroCard /> */}
          <Carousel images={images} />
        </div>
      </aside>
    </section>
  );
}
