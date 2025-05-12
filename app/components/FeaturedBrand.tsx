import Image from "next/image";
import { featuredBrandLogos } from "../data";

const FeaturedBrand = () => {
  return (
    <section className="w-full text-center mt-10">
      <h1 className=" font-sans font-light text-xl md:text-2xl uppercase tracking-[6px] mb-2">
        Who Featured Us!
      </h1>

      <div className="grid grid-cols-2 items-center md:flex md:justify-between gap-8 md:gap-5 pt-5">
        {featuredBrandLogos.map((logo, index) => (
          <picture key={index} className=" flex flexCenter">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="featured brand logos"
              className=" w-2/3 md:w-full opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear cursor-pointer aspect-auto object-contain "
            />
          </picture>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrand;
