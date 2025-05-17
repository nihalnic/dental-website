"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { doctors } from "../data";
import { Button } from "./ui/button";

const Doctors = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const totalDoctors = doctors.length;
  const doctor = doctors[index];

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % totalDoctors);
  };

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + totalDoctors) % totalDoctors);
  };

  return (
    <section className="my-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-5 w-full h-full">
        <div className="w-full mt-5">
          <Image
            src="/assets/icons/cta-three-stars.svg"
            width={100}
            height={100}
            alt="star-icons"
            className="lg:block hidden w-12 mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-normal capitalize mb-5">
            Top-rated Hygienists, best-in-class care
          </h1>
          <p className="md:w-4/5 w-full md:text-lg text-base">
            Our Hygienists are the star of the show. In a world traditionally
            dominated by dentists, we’re turning the model on its head, bringing
            the spotlight to these dental experts.
          </p>

          <div className="flex flex-col mt-8 gap-5 md:w-2/4 mx-auto md:mx-0">
            <Button className="uppercase text-base tracking-wider font-medium">
              Book Now
            </Button>
            <Button
              variant="outline"
              className="uppercase text-base tracking-wider font-medium"
            >
              All Doctors
            </Button>
          </div>
        </div>

        <div>
          <div className="doctorCard">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                className="flex gap-4 w-full h-full"
                initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex flex-col justify-between w-full h-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-sans font-light capitalize mb-4">
                      <span>{doctor.title}</span> {doctor.name}
                    </h1>
                    <p className="text-xs uppercase md:text-sm font-medium tracking-[2px]">
                      {doctor.position}
                    </p>
                    <p className="text-xs md:text-base font-serif italic tracking-wide mt-8">
                      {doctor.servicesTime}
                    </p>
                  </div>
                  <div className="mt-4 relative">
                    <h3 className="text-sm md:text-base text-red-500 font-semibold tracking-[1px] uppercase mb-3">
                      What I Believe In
                    </h3>
                    <p className="text-xs md:text-base w-full max-w-[600px]">{doctor.quotes}</p>
                    <div className="absolute bottom-0 right-0 md:bottom-[-5px] md:right-[-10px] z-[-10]">
                      <Image
                        src="/assets/icons/quotes.svg"
                        alt="quotes"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-full">
                  <Image
                    src={doctor.img}
                    width={100}
                    height={100}
                    alt={`${doctor.name} - best ${doctor.title} in Dhaka`}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full flex justify-between items-center mt-5 md:mt-10">
            <button
              onClick={prev}
              className="hover:border border-white-600 w-15 h-15 flex items-center justify-center rounded-full p-2 cursor-pointer"
            >
              <Image
                src="/assets/icons/arrow-sharp.svg"
                width={16}
                height={16}
                alt="left-arrow"
                className="block mr-1"
              />
            </button>
            <div className="flex items-center gap-3">
              {doctors.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    i === index
                      ? "bg-white border border-white scale-110"
                      : "border border-white"
                  }`}
                ></span>
              ))}
            </div>
            <button
              onClick={next}
              className="hover:border border-white-600 w-15 h-15 flex items-center justify-center rounded-full p-2 cursor-pointer"
            >
              <Image
                src="/assets/icons/arrow-sharp.svg"
                width={16}
                height={16}
                alt="right-arrow"
                className="rotate-180 ml-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
