"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { featuredBrandLogos } from "../data";

const FeaturedBrand = () => {
  const logos = [...featuredBrandLogos, ...featuredBrandLogos];

  return (
    <section className="my-20">
      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto text-center mt-16">
        <h1 className="font-sans font-light text-xl md:text-2xl uppercase tracking-[6px] mb-2">
          Who Featured Us!
        </h1>

        <div className="relative overflow-hidden pt-6">
          <div className="linear_shade left" />
          <div className="linear_shade right" />

          <motion.div
            className="flex w-max gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px]"
              >
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt={`Featured brand logo ${index}`}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear cursor-pointer object-contain w-24 md:w-32"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrand;
