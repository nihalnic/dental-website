import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="my-20">
      <div className="bg-red-600 rounded-lg max-w-[1200px] mx-auto lg:min-h-[400px]  md:min-h-[334px] h-full px-4 py-7 md:px-0 md:py-0 text-center flex items-center flex-col justify-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        <h1 className=" normal-case font-sans text-[26px] leading-8 md:leading-10 md:text-4xl font-semibold mb-4">
          Premium Dental <span className=" hidden md:inline">Treatment</span>{" "}
          <span className="md:hidden">Care</span> <br /> at Affordable Prices
        </h1>
        <p className=" text-sm md:text-base leading-6 font-normal md:w-[600px] ">
          Get the smile you deserve without breaking the bank. Schedule your
          consultation now and experience the best in dental care!
        </p>

        <div className=" flex flex-col md:flex-row gap-4 mt-12">
          <Button className=" bg-white hover:bg-white-500 lg:text-base uppercase tracking-wider">
            appointment Now
          </Button>
          <Button
            variant={"outline"}
            className="lg:text-base text-white uppercase tracking-wider"
          >
            free consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
