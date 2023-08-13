import Typewriter from "typewriter-effect";

export default function Categories() {
  return (
    <main className="px-12 h-screen flex justify-center items-center">
      <h1 className="font-bold uppercase text-gray-800 text-6xl">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Page is coming soon 😉")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Beckys Boutique, your last stop shop! 👋")
              .start();
          }}
        />
      </h1>
    </main>
  );
}
