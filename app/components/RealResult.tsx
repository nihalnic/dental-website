"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { workResult } from "../data";

const RealResult = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else if (width >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + visibleCount) % workResult.length);
  };

  const prev = () => {
    setDirection("left");
    setIndex(
      (prev) => (prev - visibleCount + workResult.length) % workResult.length
    );
  };

  const getItems = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const iIndex = (index + i) % workResult.length;
      return workResult[iIndex];
    });
  };

  // Touch gesture support for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = startX - endX;
      if (diff > 50) next();
      if (diff < -50) prev();
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [visibleCount]);

  return (
    <section className="my-15">
      <div className="result-container " ref={containerRef}>
        <button className="arrow_btn left-[-25] cursor-pointer" onClick={prev}>
          <Image
            src="/assets/icons/arrow-sharp.svg"
            width={18}
            height={19}
            alt="arrow-left"
            className=" block object-contain"
          />
        </button>

        <button
          className=" arrow_btn right-[-25] cursor-pointer"
          onClick={next}
        >
          <Image
            src="/assets/icons/arrow-sharp.svg"
            width={18}
            height={19}
            alt="arrow-left"
            className=" block object-contain rotate-180"
          />
        </button>

        <div className="absolute top-[-40] md:top-[-28] bg-primary-600 px-5">
          <h1 className=" text-center font-sans font-normal capitalize tracking-tight lg:text-5xl">
            Real People. <br className="md:hidden" /> Real Reasults.
          </h1>
        </div>

        <div className="flex gap-4 overflow-hidden ">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="flex gap-4"
              initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getItems().map((result, i) => (
                <div
                  key={i}
                  className=" lg:w-[365px] w-[300px] p-4 bg-card-bg rounded-xl flex flex-col items-center"
                >
                  <div className="w-full relative flex flex-col flexCenter gap-2">
                    <picture className="w-full lg:w-[335px] h-[150px] relative rounded-lg">
                      <Image
                        src={result.beforeImg}
                        fill
                        alt={result.afterImg}
                        className="block object-cover rounded-lg"
                      />
                      <p className="result-tag">Before</p>
                    </picture>
                    <picture className="w-full lg:w-[335px] h-[150px] relative">
                      <Image
                        src={result.beforeImg}
                        fill
                        alt={result.afterImg}
                        className="block object-cover rounded-lg"
                      />
                      <p className="result-tag">After</p>
                    </picture>
                  </div>
                  <div className=" flex flexCenter gap-4 mt-5">
                    <p className="text-right font-medium max-w-32  leading-5 text-base">
                      {result.time}
                    </p>
                    <span className=" w-[1px] h-full bg-white"></span>
                    <p className=" text-green-primary font-serif font-medium md:text-lg leading-6 text-base capitalize">
                      {result.type}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RealResult;
