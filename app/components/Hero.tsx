"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/assets/images/hero-img.png"
        alt="Dental Clinic"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      <div className="relative z-10 flex flexCenter h-full px-4">
        <div className=" flex flex-col flexCenter text-center mt-15 md:mt-0">
          <h1 className="text-5xl md:text-[66px] font-bold normal-case">
            Reconnect with <br className="lg:hidden " /> your smile.
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            A new kind of smile-care you’ll actually look forward to.
            <br className="hidden md:block" /> Book with one of our experts
            today.
          </p>

          <div className=" mt-8 flex flexCenter flex-col md:flex-row gap-4 w-4/5 md:w-3/5 lg:w-[40%]">
            <Button className=" cursor-pointer w-full text-base uppercase rounded-4xl flex-2/5">
              Book Now
            </Button>
            <Button
              variant={"outline"}
              className=" w-full text-base uppercase rounded-4xl flex-3/5"
            >
              Free consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
