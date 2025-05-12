"use-client";

import Image from "next/image";
import Link from "next/link";
import { services } from "../data";

const Services = () => {
  return (
    <section className=" mt-20 text-center">
      <h1 className=" mb-5">Services</h1>
      <p className=" subtitle max-w-[600px] mx-auto ">
        High quality dental for you and your family. Our expert team provide a
        wide range of service ensuring comfort and personalized treatment.
      </p>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-2 md:gap-y-4 gap-y-10">
        {services.map((service, index) => (
          <div key={index} className="service-card relative">
            <div className="relative w-full h-[250px]">
              <Image
                src={service.image}
                alt={service.name}
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>

            <div className=" mt-3 text-left">
              <h3 className="text-2xl font-medium tracking-tight mb-2">
                <Link href={service.link}>
                  <span className=" absolute inset-0 z-10"></span>
                  {service.name}
                </Link>
              </h3>

              <p>{service.dis}</p>

              <div className="flex items-center mt-3">
                <p className="font-medium tracking-tight text-green-600">
                  Learn More
                </p>
                <Image
                  src="/assets/icons/arrow-line.svg"
                  width={18}
                  height={18}
                  alt="arrow-right"
                  className=" block ml-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
