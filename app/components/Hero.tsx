import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className='w-full mt-36 min-h-screen bg-[url("/assets/images/hero-img.png")] bg-cover bg-center bg-no-repeat'>
      <div className="flex flex-col text-center items-center justify-center px-6 h-full w-full">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[85px] mb-4">
          Reconnect with <br className="lg:hidden" /> your smile.
        </h1>
        <p className="subtitle">
          A new kind of smile-care you’ll actually look forward to.
          <br className="hidden md:block" /> Book with one of our experts today.
        </p>

        <div className="flex flex-col md:flex-row flexCenter gap-4 mt-6 w-full max-w-[300px] lg:max-w-[250px]">
          <Button className=" uppercase tracking-wider cursor-pointer w-full text-base font-normal rounded-4xl">
            Book Now
          </Button>
          <Button
            variant={"outline"}
            className=" uppercase tracking-wider cursor-pointer w-full text-base font-normal rounded-4xl"
          >
            Free consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
