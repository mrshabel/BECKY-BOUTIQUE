export default function Footer() {
  return (
    <section className="bg-gray-200 bg-opacity-95 text-gray-700 px-12 md:px-28 py-8 font-light ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 pb-5 border-b-gray-400 border-b">
        <div>
          <h1 className="font-bold uppercase text-[18px] mb-3 text-center text-gray-700">
            Beckys Boutique
          </h1>
          <div className="text-[13px] tracking-wider">
            <p>
              Explore our wide range of products, from exquisite dresses to chic
              accessories, all handpicked to ensure the highest quality and
              style. At Beckys Boutique, we believe that every outfit tells a
              story, and we're excited to be a part of yours.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold uppercase text-[18px] mb-3 text-center text-gray-700">
            Contact Us
          </h1>
          <div className="flex flex-col gap-4 text-[13px] tracking-wider">
            <p className="">
              We're here to assist you in any way we can. If you have questions,
              feedback, or need guidance, don't hesitate to get in touch with
              us. Our dedicated support team is ready to provide you with
              exceptional service and ensure your shopping experience is
              seamless.
            </p>
            <p className="">Email: info@beckysboutique.com</p>
            <p>Phone: +233 555 000 00</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold uppercase text-[18px] mb-3 text-center text-gray-700">
            Get in touch
          </h1>
          <p className="text-[13px] tracking-wider">
            Join the Beckys Boutique community and stay connected for all things
            fashion and style. Our passion is to help you create looks that
            inspire confidence and make a statement. Whether you're looking for
            daily wear or a special occasion outfit, we're here to guide you on
            your fashion journey.
          </p>
        </div>
      </div>

      <p className="text-center pt-3">
        Copyright 2023 {"\u00A9"}{" "}
        <a href="https://github.com/mrshabel">Sha.Bel</a> - All rights reserved{" "}
      </p>
    </section>
  );
}
